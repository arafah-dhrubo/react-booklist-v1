import { Component } from 'react';
import booklist from '../Assets/booklist'
import BookList from './BookList';
import NewBook from './NewBook';
import BookDetail from './BookDetail'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
class MainComponent extends Component {
  state = {
    books: booklist,
    selectedBook: null,
  }

  selectedBookHandler = bookID => {
    const book = this.state.books.filter(book =>
      book.id === bookID)[0];
    console.log(book);
    this.setState({
      selectedBook: book
    })
  }

  render() {
    const books = <BookList
      books={this.state.books}
      selectedBookHandler={this.selectedBookHandler}
    />


    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/new-book">New Book</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/books" exact render={() => books} />
          <Route path="/new-book" exact render={() => <NewBook />} />
          {/* evabeo pass kora jay
         <Route path="/new-book" exact component={NewBook} />
          */}
          <Route path="/:id" render={() => <BookDetail book={this.state.selectedBook} />} />
          <Redirect from="/" to="/books" />
        </Switch>
      </div>
    );
  }
}

export default MainComponent;
