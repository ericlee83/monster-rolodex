import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/CardList/CardList";
import { SearchBox } from "./Components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchOnChange = (e) =>{
    this.setState({searchField:e.target.value});
  }

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Mosters Rolodex</h1>
        <SearchBox placeHolder={'search monster'} searchOnChange={this.searchOnChange}/>
        <CardList monsters={filteredMonters} />
      </div>
    );
  }
}

export default App;
