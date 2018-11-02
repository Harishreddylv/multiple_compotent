import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Comtwo from './com2';
import Comthree from './com3';

class App extends Component {
  constructor(props){
    super(props);
    this.handlerFromParant = this.handlerFromParant.bind(this);
    this.state={
      setdata:0
    };
  }
  handlerFromParant(data){
this.setState({setdata:data});

  }
  render() {
    return (
    <div>
      <Comtwo  fromparenttochild = {this.state.setdata}/>
      <Comthree handlerFromParants= {this.handlerFromParant}/>
    </div>

    );
  }
}

export default App;
