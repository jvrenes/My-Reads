import React from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './searchResults'


class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.props.query} onChange={(event) => this.props.updateQuery(event)} />
            </div>
          </div>
        </div>
        <SearchResults updateShelfResults={this.props.updateShelfResults} addNewBook={this.props.addNewBook} />
      </div>
    )
  }

}

export default Search