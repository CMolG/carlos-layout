import React from 'react';

const Article = (props) => {
  const {
    style = {},
    testLayout = false,
    children,
  } = props;

  const defaultStyles = {
    padding: 10,
    border: testLayout && "2px solid red",
    textAlign: 'left',
    ...style,
  };

  return (
    <div className="bg-gray-100 rounded shadow p-4" style={defaultStyles}>
      {children}
    </div>
  );
};

export default Article;
