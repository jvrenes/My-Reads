import React from 'react'
import NewBook from './newbook.js'

class Display extends React.Component {
    render() {

        //(myObj['key'])

        let { updateShelfResults } = this.props
        if(updateShelfResults.length > 0) {
            const filteredShelfResults = updateShelfResults.filter(book => (book['authors']));
        
         

        if (filteredShelfResults && filteredShelfResults.length > 0) {
            if(filteredShelfResults.some(filteredShelfResults => filteredShelfResults.error === "empty query") ) {
            return (null)
          } else {
          return (
            <div className="list-books search-results">
            
            <div className="search-list-books-content">
                <div>
                    <ol className="search-books-grid">
                         {filteredShelfResults.map((book, index) => (
                             
                        <li key={index}>
                            <NewBook 
                                book={book}
                                addNewBook={this.props.addNewBook}/>
                        </li> 
                        ))}
                    </ol>
                 </div>
            </div>
        </div>
        );
        }
        }} else {
            return (null)
        }

        
        
    }
}

export default Display