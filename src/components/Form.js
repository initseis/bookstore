import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const getTitleInput = (event) => {
    setNewTitle(event.target.value);
  };

  const getAuthorInput = (event) => {
    setNewAuthor(event.target.value);
  };

  const generateId = () => {
    let temp = true;
    let random;
    while (temp) {
      random = parseInt(Math.random() * (100 - 1) + 1, 10);
      books.filter((book) => book.id === random).length > 0
        ? (temp = true)
        : (temp = false);
    }
    return random;
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: generateId(),
      name: newTitle,
      author: newAuthor,
    };
    dispatch(addBook(newBook));
  };

  return (
    <section className="addForm">
      <h2>ADD NEW BOOK</h2>
      <form action="">
        <input
          type="text"
          placeholder="Book title"
          required
          onChange={getTitleInput}
        />
        <input
          type="text"
          placeholder="Author"
          required
          onChange={getAuthorInput}
        />
        <select name="category" placeholder="cat">
          <option value="" disabled selected>
            Category
          </option>
          <option value="action">Action</option>
          <option value="science Fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Form;
