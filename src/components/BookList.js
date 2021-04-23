import React from 'react'
import Book from './Book'
import { Link, withRouter } from 'react-router-dom'
function BookList(props) {
  return (
    props.books.map((book, index) => {
      return (
        <Link to={"/" + book.id} key={book.id} style={{ textDecoration: "none", color: "black" }}><Book
          cover={book.cover}
          bookName={book.bookName}
          writer={book.writer}
          selectedBookHandler={() => props.selectedBookHandler(book.id)}
        /></Link>
      )
    }))
}

export default withRouter(BookList);
