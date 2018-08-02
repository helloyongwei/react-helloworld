import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sayHello() {
  alert("Hello world!")
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到react世界</h1>
        </header>
        <p className="App-intro">
          编辑<code>src/App.js</code>, 保存并重新加载
        </p>
        <p>
          <button onClick={sayHello}>点我</button>
        </p>
      </div>
    );
  }
}

export default App;
