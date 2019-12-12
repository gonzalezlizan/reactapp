import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subcomponent from './Subcomponent';

class App extends Component {
  constructor() {
    super();
    this.state ={
      mainText : 'Click me and I will charge users!',
      isLogoVisible: true,
      users: []
    };
  }

  handleClick = () => {
    this.setState({ 
      mainText : 'Charging...',
    });

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(async (response) => {
          let result = await response.json();
          this.setState({ 
            mainText : 'Thanks!',
            isLogoVisible: false,
            users: result
          })
        });
    },2000);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header' onClick={this.handleClick}>
          {this.state.isLogoVisible && <img src={logo} className='App-logo' alt='logo' />}  
          <h2>{ this.state.mainText }</h2>
          {this.createUsersTable()}
          <Subcomponent/>
        </div>
      </div>
    );
  }

  createUsersTable = () => {
    let table = []

    for (let i = 0; i < this.state.users.length; i++) {
      table.push(<tr>
        {this.state.users[i].name}
      </tr>)
    }
    return table
  }
}

export default App;