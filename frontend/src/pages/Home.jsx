import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
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
      {/* Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-5xl text-blue-800 font-bold tracking-tight shadow-md'>
          Book Store
        </h1>
        <Link to='/books/create'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-sky-600 to-blue-800 p-4 rounded-full shadow-xl text-white cursor-pointer'
          >
            <MdOutlineAddBox className='text-4xl' />
          </motion.div>
        </Link>
      </div>

      {/* Toggle View Section */}
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

      {/* Book List or Spinner */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {books.map((book) => (
            <div key={book._id} className='bg-white rounded-xl shadow-lg p-4 transition-transform hover:scale-105'>
              <img
                src={book.image || 'https://via.placeholder.com/150'}
                alt={book.title}
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h2 className='text-xl text-gray-800 font-semibold'>{book.title}</h2>
              <p className='text-sm text-gray-500'>{book.author}</p>
              <p className='text-lg font-bold text-blue-700 mt-2'>${book.price}</p>
              <div className='flex justify-between items-center mt-4'>
                <Link to={`/books/${book._id}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-r from-sky-600 to-blue-800 p-2 rounded-full text-white cursor-pointer'
                  >
                    <MdOutlineDelete className='text-lg' />
                  </motion.div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
