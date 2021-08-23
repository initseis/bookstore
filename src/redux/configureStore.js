import { combineReducers } from 'redux';
import books from './books/books';

const allReducers = combineReducers({
  books,
});

export default allReducers;
