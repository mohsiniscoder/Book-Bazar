import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import { motion } from 'framer-motion';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-6 bg-sky-50 min-h-screen'>
      <div className='flex justify-center items-center gap-x-6 mb-6'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='bg-gradient-to-r from-sky-600 to-blue-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all'
          onClick={() => setShowType('table')}
        >
          Table View
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='bg-gradient-to-r from-sky-600 to-blue-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all'
          onClick={() => setShowType('card')}
        >
          Card View
        </motion.button>
      </div>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl text-blue-800 font-bold tracking-tight'>Books List</h1>
        <Link to='/books/create'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-sky-600 to-blue-800 p-4 rounded-full shadow-xl text-white'
          >
            <MdOutlineAddBox className='text-4xl' />
          </motion.div>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
