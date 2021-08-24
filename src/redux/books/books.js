const ADD_BOOK = "bookStore/books/ADD_BOOK";
const REMOVE_BOOK = "bookStore/books/REMOVE_BOOK";

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialState = [
  {
    id: 1,
    name: "The Hunger Games",
    category: "Action",
    author: "Suzanne Collins",
  },
  {
    id: 2,
    name: "The Games",
    category: "Action",
    author: "Suzanne ",
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => Number(book.id) !== Number(action.index));

    default:
      return state;
  }
};

export default reducer;
