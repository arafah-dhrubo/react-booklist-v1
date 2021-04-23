import React from 'react'
import '../stylesheets/Book.css'
import '../App.css'

function Book(props) {
  console.log(props)
  return (
    <div className="Book" onClick={props.selectedBookHandler}>
      <h3>Book Name: {props.bookName}</h3>
      <h4>Writer: {props.writer}</h4>
    </div>
  );
}

export default Book
