import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='shadow-md'
      >
        <Link
          to={destination}
          className='group flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-800 text-white px-4 py-2 rounded-2xl font-semibold transition duration-300 ease-in-out shadow-lg hover:from-blue-700 hover:to-sky-900'
        >
          <BsArrowLeft className='text-2xl group-hover:-translate-x-1 transition-transform duration-300' />
          <span className='hidden sm:inline-block'>Go Back</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default BackButton;

