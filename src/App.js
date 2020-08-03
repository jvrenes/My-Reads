import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search.js'
import Display from './display.js'
import * as BooksAPI from './BooksAPI.js'
import { Route } from 'react-router-dom' 

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [ ],
      query: '',
      results: [ ],
      updateShelfResults: [ ]
    }

    this.changeShelf = this.changeShelf.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.compareBooksShelf = this.compareBooksShelf.bind(this)

  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  changeShelf = (readingShelf, book) => {
    const booksIndex = this.state.books.findIndex(element => element.id === book.id)
    const targetBook = this.state.books[booksIndex]
    const newArray = [...this.state.books]
    newArray[booksIndex] = {...newArray[booksIndex], shelf: readingShelf}
    this.setState({
      books: newArray,
      });
    BooksAPI.update(targetBook, readingShelf)
  }

  updateQuery = (event) => {
    event.preventDefault()
    const newQuery = event.target.value
    this.setState(() => ({
      query: newQuery
    }))
      BooksAPI.search(newQuery)
      .then((newResults) => this.setState({
        results: newResults
      })).then(()=> this.compareBooksShelf(this.state.results)
      )
  }

  compareBooksShelf = (results) => {
    if(Array.isArray(results)){
     let newArray = results
     newArray.forEach(result => {
       result.shelf = 'none'
     });
     const { books } = this.state
     if (results){
      for (let i = 0 ; i < results.length ; i++){
      const result = results[i]
        for(let x = 0 ; x < books.length ; x++) {
          const book = books[x]
          if(result.title === book.title){
            result.shelf = book.shelf
          }
        }   
      }
     }
     
  this.setState({updateShelfResults: newArray})
}else{
  this.setState({updateShelfResults: ''})
}
}

  addNewBook = (shelfs, bookToAdd) => {
    console.log(bookToAdd)
      const booksIndex = this.state.updateShelfResults.findIndex(element => element.id === bookToAdd.id)
      console.log("llamada a addNewBook/App" + shelfs + bookToAdd.title + bookToAdd.id)


    const book = this.state.updateShelfResults[booksIndex]
    const newArray = [...this.state.updateShelfResults]
    newArray[booksIndex] = {...newArray[booksIndex], shelf: shelfs}
    this.setState({
      updateShelfResults: newArray,
      });
    BooksAPI.update(book, shelfs)
    this.componentDidMount()
    alert("Book " + bookToAdd.title + " added to " + shelfs + " shelf")
    this.componentDidMount()
  }
  
  render() {
    return (
      <div className="app">
        
        <Route exact path='/' render= { () => (
          <Display books={this.state.books} changeShelf={this.changeShelf}/> ) } />

        <Route exact path='/search' render= { () => (
          <Search query={this.state.query} addNewBook={this.addNewBook} books={this.state.books} updateQuery={this.updateQuery} updateShelfResults={this.state.updateShelfResults}/>  )}/>
      </div>
    )
  }
}

export default BooksApp
