import React from 'react';
import {motion} from 'framer-motion';

const DefaultAnimation = (props) => {
  const { children, config, loop } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: config?.duration || 0.8,
        ease: config?.easing || "linear",
        repeat: loop ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default DefaultAnimation;
