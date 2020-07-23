
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import List from './Components/List'
import NewTask from './Components/NewTask'
// import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super ()

    this.state = {
      list: [ ]
    };



  }

  render(){
    return (
      <div className='App'>
        <h1>GET DONE STUFF</h1>
        <NewTask add={this.handleAddTask} />
      </div>
    )
  }
}



export default App;
