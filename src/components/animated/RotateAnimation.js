import React from 'react';
import {motion} from 'framer-motion';

const RotateAnimation = (props) => {
  const { children, config, loop } = props;
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: config?.duration || 1.5,
        ease: config?.easing || "easeInOut",
        repeat: loop ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default RotateAnimation;
