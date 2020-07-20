import React , { useEffect, useState }from 'react';
import logo from './validlogo.png';
import './App.css';
import ExampleComponent from './components/example';
import Example from './components/example';
import Table from './components/table';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav } from 'react-bootstrap'
import axios from "axios"


function App() {
 
  return (
    
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="message">
          <h3>We Will Have A Peaceful World By Preventing The Spread Of Misinformation</h3>
        </div>
        </header>
        <div><Navbar background-color = "white" variant="dark" >
        
            <Nav className="NavBar">
        <div className = "home">
          <Nav.Link  href="#home" >Home</Nav.Link>
        </div> 
        <div className = "lastestnews">
            <Nav.Link  href="#lastestnews">Lastest News</Nav.Link> 
        </div> 
        <div className = "contactus">
          <Nav.Link href="#Contactus">Contact Us</Nav.Link>
        </div>
          </Nav>
          </Navbar>
     
    </div>   
    <ExampleComponent />

    </div>

  );
}
export default App;



// const [data, setData] = useState([])
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const { data: dataFromAPI} = await axios('https://api.covid19api.com/total/country/united-states?from=2020-07-17T00:00:00Z&to=2020-07-19T00:00:00Z')
//         setData(dataFromAPI)
//       } catch(e) {
//         console.log(e)
//       }
//     }
//     fetchData()
//   }, [])




// {data && data.map(item => {
//   return (
//   <>
//   <li>{item.Confirmed}</li>
//   <li>{item.Deaths}</li>
//   <li>{item.Recovered}</li>
//   </>
//   )
// })}



























