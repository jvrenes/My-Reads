import React from 'react'

class NewBook extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            
         };
      }

      changeShelf = (event) => {
        const shelf = event.target.value
        console.log(this.props.book)
        this.props.addNewBook(shelf, this.props.book)
    }

    

    render(){


    if(this.props.book.hasOwnProperty('imageLinks') && this.props.book.hasOwnProperty('shelf')){
        const BackgroundImage = this.props.book.imageLinks.thumbnail
        return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${BackgroundImage})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(event) => {this.changeShelf(event)}}  value={this.props.book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
    <div className="book-title">{this.props.book.title}</div>
    {this.props.book.authors.map((author, index) => (
                  <div key={index} className="book-authors">{author}</div>
                ))}
        <div className="book-authors">{this.props.book.shelf}</div>
        </div>   
    )
    }else if (this.props.book.hasOwnProperty('shelf')) {
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundColor: 'grey' }}><p style={{textAlign: "center", padding: "40% 0"}}>No preview available</p></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => {this.changeShelf(event)}} value={this.props.book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
        <div className="book-title">{this.props.book.title}</div>
        {this.props.book.authors.map((author, index) => (
                  <div key={index} className="book-authors">{author}</div>
                ))}
        <div className="book-authors">{this.props.book.shelf}</div>
            </div>   
        )
    } else { return(null)}

    }
}

// Tooltip.defaultProps = {
//     books.shelf: 'none',
//   }

export default NewBook