import React from 'react'
import Book from './book.js'
import PropTypes from 'prop-types';

class Read extends React.Component {
    render() {
      const booksRead = this.props.books.filter(book => book.shelf === "read");

        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                 {booksRead.map((book, index) => (
                  <li key={index}>
                    <Book 
                      book={book}
                      changeShelf={this.props.changeShelf}/>
                  </li>
                ))}
                </ol>
              </div>
            </div>
        )
    }
}

Read.propTypes = {
  books: PropTypes.array,
  changeShelf: PropTypes.func
};

export default Read