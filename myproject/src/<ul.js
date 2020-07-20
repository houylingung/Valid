import React from 'react';
import logo from './validlogo.png';
import './App.css';
import ExampleComponent from './components/example';
import Example from './components/example';
import Table from './components/table';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="message">
        <h3>We Will Have A Peaceful World By Preventing The Spread Of Misinformation</h3>
      </div>
      <ul>
      <div><Navbar bg="dark" variant="dark">
        <Nav className="NavBar">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#lastestnews">Lastest News</Nav.Link>
        <Nav.Link href="#Contactus">Contact Us</Nav.Link>
        </Nav>
        </Navbar>
       
       </div>
       </ul>


      
    
     
      </header>
      
    </div>
  );
}
export default App;
