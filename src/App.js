import React, { Component } from 'react';
import TodoMain from './components/TodoMain';
import TodoList from './components/TodoList';
import Footerlink from './components/FooterLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoMain />
        <TodoList />
        <Footerlink />
      </div>
    );
  }
}

export default App;
