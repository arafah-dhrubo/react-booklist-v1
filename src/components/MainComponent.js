import { Component } from 'react';
import Book from './Book'
import booklist from '../Assets/booklist'
class MainComponent extends Component {
  state = {
    books: booklist,
    showBooks: true
  }

  // changeBookState = (newBookName) => {
  //   this.setState({
  //     bookName: this.state.books[0].bookName = newBookName
  //   });
  // }

  changeWithInput = (index, event) => {
    const book = { ...this.state.books[index] }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({ books: books });
  }

  deleteBookState = (index) => {
    // const books = this.state.books.slice();
    // const books = this.state.books.map(item=>item);
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books: books });
  }

  toggleBookState = () => {
    this.setState({ showBooks: !this.state.showBooks });
  }

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      background: "red",
      color: "white",
    }

    let books = null;
    if (this.state.showBooks) {
      books = this.state.books.map((book, index) => {
        return (
          <Book
            bookName={book.bookName}
            writer={book.writer}
            change={(event) => this.changeWithInput(index, event)}
            delete={() => this.deleteBookState(index)}
            key={book.id}
          />
        )
      });
    }

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBookState}>Toggle Books</button><br />
        <input type="text" onChange={this.changeWithInput} />
        {books}
      </div>
    );
  }
}

export default MainComponent;
