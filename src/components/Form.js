import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const getTitleInput = (event) => {
    setNewTitle(event.target.value);
  };

  const getAuthorInput = (event) => {
    setNewAuthor(event.target.value);
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
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
