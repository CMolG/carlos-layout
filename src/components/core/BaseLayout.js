import React from 'react';
import {propagateProps} from "../../coreFunctions";

/**
 * BaseLayout
 * @param {object} props
 * @param {string} props.font - define the font (font-family) by default
 * @param {string} props.preset - name of the predefined style ("simple", "brutal", etc.)
 * @param {Object} props.style - customized styles
 */
const BaseLayout = (props) => {
  const {
    font = '',
    preset = '',
    style = {},
    testLayout = false,
    children,
    ...restProps
  } = props;

  const testColor = 'red';

  const getPresetStyles = (presetName) => {
    switch (presetName) {
      case 'brutal':
        return {
          width: '100%',
          height: '100%',
          boxShadow:
            'rgba(255, 255, 255, 1) 5px 5px, rgba(0, 0, 0, 1) 10px 10px',
        };
      default:
        return {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        };
    }
  };

  const presetStyles = getPresetStyles(preset);

  const mergedStyle = {
    display: 'flex',
    border: testLayout && `2px solid ${testColor}`,
    ...presetStyles,
    fontFamily: font || presetStyles.fontFamily || 'inherit',
    ...style,
  };

  return (
    <div className="mx-auto p-4 max-w-screen-xl min-h-screen flex items-center justify-center" style={mergedStyle}>
      {testLayout &&
        <>
          <div style={{position: 'absolute', width: '2px', height: '2px', backgroundColor: testColor}}/>
          <div style={{position: 'absolute', left: 5, width: '10px', height: '2px', backgroundColor: testColor}}/>
          <div style={{position: 'absolute', right: 5, width: '10px', height: '2px', backgroundColor: testColor}}/>
        </>
      }
      {React.Children.map(children, (child) => propagateProps(child, { font, preset, testLayout, style, ...restProps }))}
    </div>
  );
}

export default BaseLayout;
