import React from 'react';

const BookItem = (props) => {
  const { title, author, genre } = props.book;  // if not destructing then react does not allow to render directly child object



/*By using destructuring, we extract the title, author, and genre properties from props.book and then display them separately in the JSX. This way, you'll be able to render the individual properties of each book correctly.*/

  return (
    <div className="book-item">
      <h2>Title: {title}</h2>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default BookItem;
