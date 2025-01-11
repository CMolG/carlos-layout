import React from "react";
import {calculateAspectRatio, propagateProps} from "../coreFunctions";

const Container = (props) => {
  const {
    style = {},
    testLayout = false,
    aspectRatio,
    children,
    ...restProps
  } = props;

  const aspectRatioPadding = aspectRatio ? calculateAspectRatio(aspectRatio) : null;

  const mergedStyle = {
    position: aspectRatioPadding ? 'relative' : 'initial',
    width: aspectRatioPadding ? '100%' : style.width,
    paddingBottom: aspectRatioPadding ? `${aspectRatioPadding}%` : undefined,
    backgroundColor: style.backgroundColor,
    border: testLayout && "2px solid red",
    ...(!aspectRatioPadding && style),
  };

  return (
    <div style={mergedStyle} className={aspectRatioPadding ? 'aspect-w-auto' : ''}>
      {React.Children.map(children, (child) => propagateProps(child, { testLayout, ...restProps }))}
    </div>
  );
};

export default Container;