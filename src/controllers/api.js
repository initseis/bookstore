const bookstoreApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AciDlxwIdrEeykcGOUF8';

const getBooksAPI = async () => {
  const response = await fetch(`${bookstoreApi}/books`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

const setBookAPI = async (newBook) => {
  const response = await fetch(`${bookstoreApi}/books`, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

const deleteBookAPI = async (id) => {
  const response = await fetch(`${bookstoreApi}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export { getBooksAPI, setBookAPI, deleteBookAPI };
