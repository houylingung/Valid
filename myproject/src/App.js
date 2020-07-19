import React from 'react';
import logo from './validlogo.png';
import './App.css';
import ExampleComponent from './components/example';
import Example from './components/example';
import Table from './components/table';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Ung</p>
      
      <ExampleComponent name="Tommy"/>
      <ExampleComponent name="Houy"/>
      
      < Table />
          Learn React
      
      </header>
      
    </div>
  );
}

export default App;
