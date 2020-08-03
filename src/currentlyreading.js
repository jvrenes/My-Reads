import React from 'react'
import Book from './book.js'
import PropTypes from 'prop-types'

class CurrentlyReading extends React.Component {
    render() {

      const booksCurrently =  this.props.books.filter(book => book.shelf === "currentlyReading");

      return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksCurrently.map((book, index) => (
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

CurrentlyReading.propTypes = {
  books: PropTypes.array,
  changeShelf: PropTypes.func
};

export default CurrentlyReading