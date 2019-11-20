import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list";
import { Search } from "./components/search/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Nest</h1>
        <Search
          handleChange={e => this.setState({ searchField: e.target.value })}
          placeHolder="Search Monsters"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
