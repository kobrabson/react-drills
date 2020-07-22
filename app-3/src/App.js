import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      filtername: ' ',
      name: ['Kody', 'Alysee', 'Luna']
    };
  }

  handleChange(filter) {
    this.setState({filtername:filter});
  }

render (){
  let displayName = this.state.name.filter((el, i) => {
  return el.includes(this.state.filtername);
  })
  .map((el, i) => {
  return <h2 key={i}>{el}</h2>;
  });

  return <div className="App" >
    < input onChange={e => this.handleChange(e.target.value)} type='text' />
    {displayName}
  </div>
}

}



export default App;
