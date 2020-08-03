import React from 'react'

class Book extends React.Component{

    componentDidMount() {
        this.setState({shelf: this.props.shelf, author: this.props.author})
    }

    changeShelf = (event) => {
        const shelf = event.target.value
        this.props.changeShelf(shelf, this.props.book)
    }

    render(){
    const BackgroundImage = this.props.book.imageLinks.thumbnail
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${BackgroundImage})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.changeShelf} value={this.props.book.shelf}>
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
    
    </div>   
    )}
}


export default Book