import React from 'react'
import Book from './book.js'
import PropTypes from 'prop-types'

class WantToRead extends React.Component {
    render() {

        const booksWantToRead = this.props.books.filter(book => book.shelf === "wantToRead");

        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksWantToRead.map((book, index) => (
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

WantToRead.propTypes = {
  books: PropTypes.array,
  changeShelf: PropTypes.func
}

export default WantToRead