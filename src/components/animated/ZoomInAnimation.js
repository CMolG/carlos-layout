import React from 'react';
import {motion} from 'framer-motion';

const ZoomInAnimation = (props) => {
  const { children, config, loop } = props;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: config?.duration || 0.8,
        ease: config?.easing || "easeOut",
        repeat: loop ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInAnimation;
