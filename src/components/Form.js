import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookThunk } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const getTitleInput = (event) => {
    setNewTitle(event.target.value);
  };

  const getCategoryInput = (event) => {
    setNewCategory(event.target.value);
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: newTitle,
      category: newCategory,
    };
    dispatch(addBookThunk(newBook));
    setNewTitle('');
    setNewCategory('');
  };

  return (
    <section className="addForm">
      <h2>ADD NEW BOOK</h2>
      <form action="" onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Book title"
          required
          onChange={getTitleInput}
          value={newTitle}
        />
        <select
          name="category"
          placeholder="cat"
          onChange={getCategoryInput}
          required
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
