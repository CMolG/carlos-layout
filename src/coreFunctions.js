import React from "react";

export const propagateProps = (child, props) => {
  const { style, ...restProps } = props;
  if (React.isValidElement(child)) {
    return React.cloneElement(child, restProps);
  }
  return child;
};

export const calculateAspectRatio = (relation) => {
  if (!relation) return null;
  const separator = relation.includes('/') ? '/' : ':';
  const [width, height] = relation.split(separator).map(Number);
  if (!width || !height) return null;
  return (height / width) * 100;
};