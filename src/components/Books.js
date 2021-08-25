import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooksThunk, getBooksThunk } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksThunk());
  }, []);

  const books = useSelector((state) => state.booksReducer);

  const handleClick = (event) => {
    dispatch(removeBooksThunk(event.target.value));
  };

  return (
    <main>
      <ul className="">
        {books.map((book) => (
          <Book key={book[0]} book={book} handleClick={handleClick} />
        ))}
      </ul>
    </main>
  );
};

export default Books;
