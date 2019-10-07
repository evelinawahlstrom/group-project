import './App.css';
import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Dogslist from './components/Dogslist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Route exact path="/" component={Dogslist} />
        </main>
                {/* <Dogslist /> */}
      </header>
    </div>
  );
}

export default App;
