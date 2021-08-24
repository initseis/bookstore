import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  const handleClick = (event) => {
    dispatch(removeBook(event.target.value));
  };

  return (
    <main>
      <ul className="">
        {books.map((book) => (
          <Book key={book.id} book={book} handleClick={handleClick} />
        ))}
      </ul>
    </main>
  );
};

export default Books;
