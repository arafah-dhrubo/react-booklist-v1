import React from 'react'
import Book from './Book'
function BookList(props) {
  return (
    props.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
          change={(event) => props.changeWithInput(index, event)}
          delete={() => props.deleteBookState(index)}
          key={book.id}
        />
      )
    }))
}

export default BookList
