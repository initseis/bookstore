const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (index) => ({
  type: DELETE_BOOK,
  index,
});

const initialState = [
  {
    id: 1,
    name: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    name: 'The Games',
    category: 'Action',
    author: 'Suzanne ',
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case DELETE_BOOK:
      return state.filter((book) => Number(book.id) !== Number(action.index));

    default:
      return state;
  }
}
