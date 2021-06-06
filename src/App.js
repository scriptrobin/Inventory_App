import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Addinventory from './components/Addinventory';
import Inventorylist from './components/Inventorylist';
import { format } from 'url';
import {Route , Switch} from 'react-router-dom';
function App() {
  const inventoryData = [];
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
           <div className="col-md-12">
                 <Route exact path="/" component={Addinventory}></Route>
                 <Route exact path="/inventorylist" component={Inventorylist}></Route>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
