import './App.css';
import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import DogsList from './components/DogsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Route exact path="/" component={DogsList} />
          <DogsList />
        </main>
      </header>
    </div>
  );
}

export default App;
