import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Form from './components/FormStudent'



// 1. Component
// 2. State
// 3. Props
class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <Form/>
  
    </div>
  );
}}


export default App;
