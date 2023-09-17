import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  // Sample list of books
  const books = [
    { title: 'Book 1', author: 'Author 1', genre: 'Fiction' },
    { title: 'Book 2', author: 'Author 2', genre: 'Fantasy' },
    { title: 'Book 3', author: 'Author 3', genre: 'Science Fiction' },
  ];

  return (
    <div className="book-list">
        
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
