import React from 'react';
import {motion} from 'framer-motion';

const BounceAnimation = (props) => {
  const { children, config, loop } = props;
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
      }}
      transition={{
        duration: config?.duration || 0.5,
        ease: config?.easing || "easeInOut",
        repeat: loop ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default BounceAnimation;
