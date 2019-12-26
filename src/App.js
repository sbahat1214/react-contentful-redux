import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Room from './components/Room'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/rooms/:post_id" component={Room} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/" exect component={Home} />
      </Switch>
    </div>
  );
}

export default App;
