import React from 'react';

const Book = ({ book, handleClick }) => {
  if (book[1][0] !== '') {
    return (
      <li className="book">
        <div className="bookMain">
          <div className="bookDetail">
            <h4 className="bookCategory">{book[1][0].category}</h4>
            <h3 className="bookTitle">{book[1][0].title}</h3>
            <h4 className="bookAuthor">Suzanne Collins</h4>
          </div>
          <div className="bookOptions">
            <button type="button">Comments</button>
            <div className="divider">|</div>
            <button type="button" value={book[0]} onClick={handleClick}>
              Remove
            </button>
            <div className="divider">|</div>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="bookCompletion">
          <div className="bookPercentage">
            <div className="circleCompletion" />
            <div className="completionDetails">
              <h2>75%</h2>
              <h4>Completed</h4>
            </div>
          </div>
          <div className="sectionDivider">|</div>
          <div className="chapterDetails">
            <h4>CURRENT CHAPTER</h4>
            <h3>Chapter 10: &quot;A Lesson Learned&quot;</h3>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </li>
    );
  }
  return <div />;
};

export default Book;
