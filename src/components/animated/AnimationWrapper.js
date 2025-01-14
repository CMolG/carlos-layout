import React from 'react';

const AnimationWrapper = (props) => {
  const {
    animationType,
    children,
    config,
    loop
  } = props;

  switch (animationType) {
    case "fadeIn":
      return <FadeInAnimation config={config} loop={loop}>{children}</FadeInAnimation>;
    case "slideUp":
      return <SlideUpAnimation config={config} loop={loop}>{children}</SlideUpAnimation>;
    case "zoomIn":
      return <ZoomInAnimation config={config} loop={loop}>{children}</ZoomInAnimation>;
    case "rotate":
      return <RotateAnimation config={config} loop={loop}>{children}</RotateAnimation>;
    case "bounce":
      return <BounceAnimation config={config} loop={loop}>{children}</BounceAnimation>;
    default:
      return <DefaultAnimation config={config} loop={loop}>{children}</DefaultAnimation>;
  }
};
export default AnimationWrapper;
