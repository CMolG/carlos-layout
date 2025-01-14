import React from 'react';
import {motion} from 'framer-motion';

const FadeInAnimation = (props) => {
  const { children, config, loop } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: config?.duration || 1,
        ease: config?.easing || "easeInOut",
        repeat: loop ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
