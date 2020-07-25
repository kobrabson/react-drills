import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './component/Image';

class App extends Component {
  constructor(){
    super()

    this.state = {
      pizza: "yummy"

    }

  }
  render(){
    return (
      <div>
        {/* <img url={'placeholder'} ></img> */}
        <Image 
        imageProps={'https://http.cat/409'} 
        secProps={this.state.pizza}/>
        <Image 
        imageProps={`https://http.cat/400`} />
      </div>
    )
  }
}

export default App;
