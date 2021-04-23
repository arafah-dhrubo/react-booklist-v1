import { Component } from 'react';
import booklist from '../Assets/booklist'
import BookList from './BookList';
import NewBook from './NewBook';
import { Route, NavLink } from 'react-router-dom';
class MainComponent extends Component {
  state = {
    books: booklist,
  }

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

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      background: "red",
      color: "white",
    }

    const books = <BookList
      books={this.state.books}
      deleteBookState={this.deleteBookState}
      changeWithInput={this.changeWithInput}
    />


    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/new-book">New Book</NavLink></li>
          </ul>
        </nav>
        <Route path="/" exact render={() => books} />
        <Route path="/new-book" exact render={() => <NewBook />} />
        {/* evabeo pass kora jay
         <Route path="/new-book" exact component={NewBook} />
          */}
      </div>
    );
  }
}

export default MainComponent;
