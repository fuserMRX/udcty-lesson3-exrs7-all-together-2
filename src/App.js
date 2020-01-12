import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addMessage = (messageObj) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, messageObj]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow user={this.state.users[0]} addMessage={this.addMessage} messages={this.state.messages} />
          <ChatWindow user={this.state.users[1]} addMessage={this.addMessage} messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;