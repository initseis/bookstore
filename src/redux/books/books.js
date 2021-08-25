import { getBooksAPI, setBookAPI, deleteBookAPI } from '../../controllers/api';

const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialState = [['', ['']]];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => String(book[0]) !== String(action.payload));

    default:
      return state;
  }
};

export const getBooksThunk = () => (dispatch) => {
  getBooksAPI().then((res) => {
    dispatch(getBooks(Object.entries(res)));
  });
};

export const addBookThunk = (newBook) => (dispatch) => {
  setBookAPI(newBook).then(() => {
    dispatch(
      addBook([
        newBook.item_id,
        [{ category: newBook.category, title: newBook.title }],
      ]),
    );
  });
};

export const removeBooksThunk = (id) => (dispatch) => {
  deleteBookAPI(id).then(() => {
    dispatch(removeBook(id));
  });
};

export default reducer;
