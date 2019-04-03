import React, { Component } from 'react';
import './App.css';
import Navbar from './CONPONENTS/Navbar';
import Users from './CONPONENTS/Books';
import AddUser from './CONPONENTS/AddUsers';
import Search from './CONPONENTS/Search';


class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title = "Library APP"/>
        <Search/>
        <hr/>
        <AddUser/>
        <Users/>    

      </div>
    );
  }
}

export default App;
