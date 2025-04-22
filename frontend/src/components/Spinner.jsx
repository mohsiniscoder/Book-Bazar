import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center m-8'>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className='w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-blue-800 shadow-lg'
      >
        <div className='w-full h-full border-4 border-t-transparent border-white rounded-full animate-spin'></div>
      </motion.div>
    </div>
  );
};

export default Spinner;
