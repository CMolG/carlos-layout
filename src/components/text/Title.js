import React from 'react';

const Title = (props) => {
  const {
    style = {},
    testLayout = false,
    children,
  } = props;

  const defaultStyles = {
    lineHeight: '1.5',
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 600,
    border: testLayout && "2px solid red",
    ...style,
  };

  return (
    <h1 className='mb-3 text-lg md:text-xl' style={defaultStyles}>
      {children}
    </h1>
  );
};

export default Title;