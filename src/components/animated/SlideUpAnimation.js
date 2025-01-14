import React from 'react';
import {motion} from 'framer-motion';

const SlideUpAnimation = (props) => {
  const { children, config, loop } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: config?.duration || 1,
        ease: config?.easing || "easeOut",
        repeat: loop ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
