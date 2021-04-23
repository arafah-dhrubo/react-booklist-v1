import React from 'react'
import '../stylesheets/Book.css'

function Book(props) {
  return (
    <div className="Book">
      <h3 onClick={props.delete}>Book Name: {props.bookName}</h3>
      <h4>Writer: {props.writer}</h4>
      <input type="text" onChange={props.change} placeholder={props.bookName} />

    </div>
  )
}

export default Book
