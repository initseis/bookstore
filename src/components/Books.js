import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleClick = (event) => {
    dispatch(deleteBook(event.target.value));
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
