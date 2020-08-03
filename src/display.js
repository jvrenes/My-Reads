import React from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './currentlyreading.js'
import WantToRead from './wanttoread.js'
import Read from './read.js'
import PropTypes from 'prop-types';


class Display extends React.Component {
    render() {
    return(
        
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={this.props.books} changeShelf={this.props.changeShelf}/>
            <WantToRead books={this.props.books} changeShelf={this.props.changeShelf}/>
            <Read books={this.props.books} changeShelf={this.props.changeShelf}/>
          </div>
        </div>
        <div className="open-search button">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    )}
}

Display.propTypes = {
  books: PropTypes.array,
  changeShelf: PropTypes.func
};

export default Display