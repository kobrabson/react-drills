import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: ['Kody', 'Alysee', 'Luna']
    }
  }

render (){
  let displayName = this.state.name.map((el, i) => {
  return <h2 key={i}>{el}</h2>;
  });

  return <di className="App" > {displayName} </di>
}

}


export default App;
