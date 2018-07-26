import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class TodoList extends Component {
  state = {
    items: ["buy bacon", "buy milk", "buy cheese"],
    value: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ items: [...this.state.items, this.state.value] });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.items.map(item => {
            return <TodoItem>{item}</TodoItem>;
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

class TodoItem extends Component {
  state = {
    done: false
  };

  handleClick = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    return (
      <li
        style={{ textDecoration: this.state.done ? "line-through" : "" }}
        onClick={this.handleClick}
      >
        {this.props.children}
      </li>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
