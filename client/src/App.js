import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { Input, FormBtn } from "./components/Form";
import "./App.css";
import { BookGroup, BookDisplay } from "./components/BookDisplay";

class App extends Component {
  state = {
    books: [],
    searchName: ""
  }

  componentDidMount() {
    axios.get("/api/books")
      .then(response => {
        this.setState({
          books: response
        });
        // console.log(this.state.books);
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.searchName);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.get()
    console.log(this.state.searchName);
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron>
          <div className="d-flex justify-content-around w-100">
            <Input
              value={this.state.searchName}
              onChange={this.handleInputChange}
              name="searchName"
              placeholder="Enter a title, author, or subject"
            />
            <FormBtn onClick={this.handleFormSubmit}>Book-It</FormBtn>
          </div>
        </Jumbotron>
        {this.state.books.length ? (
          <BookGroup>
            {this.state.books.map(book => (
              <BookDisplay key={book._id}>
                {/* <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
              </BookDisplay>
            ))}
          </BookGroup>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    );
  }
}

export default App;
