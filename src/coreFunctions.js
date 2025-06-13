import React from "react";

export const propagateProps = (child, props) => {
  const { style: newStyle, ...restProps } = props;
  if (React.isValidElement(child)) {
    const childProps = child.props || {};
    const mergedStyle = { ...newStyle, ...childProps.style };
    return React.cloneElement(child, { ...restProps, style: mergedStyle });
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

export function updateOrCreateMetaTag(name, content, isProperty = false) {
  const tagName = isProperty ? 'property' : 'name';
  let tag = document.querySelector(`meta[${tagName}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(tagName, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}