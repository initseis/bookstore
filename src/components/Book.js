import React from 'react';

const Book = ({ book, handleClick }) => {
  if (book[1][0] !== '') {
    return (
      <li className="book">
        <h5>{book[1][0].category}</h5>
        <h3>{book[1][0].title}</h3>
        <button type="button" value={book[0]} onClick={handleClick}>
          Remove
        </button>
      </li>
    );
  }
  return <div />;
};

export default Book;
