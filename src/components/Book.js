import React from 'react';

const Book = ({ book, handleClick }) => (
  <li className="book">
    <h5>{book.category}</h5>
    <h3>{book.name}</h3>
    <h5>{book.author}</h5>
    <button type="button" value={book.id} onClick={handleClick}>
      Remove
    </button>
  </li>
);

export default Book;
