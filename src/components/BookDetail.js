import React from 'react'
import '../App.css'

function BookDetail(props) {
  console.log(props.book);
  if (props.book === null) return <div></div>
  return (
    <div className="details">
      <h1>{props.book.bookName}</h1>
      <h3>{props.book.writer}</h3>
      <p>{props.book.description}</p>
    </div>
  );
}

export default BookDetail;
