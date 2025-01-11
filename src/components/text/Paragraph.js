import React from 'react';

const Paragraph = (props) => {
  const {
    style = {},
    testLayout = false,
    children,
  } = props;

  const defaultStyles = {
    letterSpacing: '0.04em',
    lineHeight: '1.5',
    textAlign: 'justify',
    paddingLeft: 20,
    paddingRight: 20,
    border: testLayout && "2px solid red",
    ...style,
  };

  return (
    <p className='mb-3' style={defaultStyles}>
      {children}
    </p>
  );
};

export default Paragraph;