import React, {Component} from 'react'
import request from 'superagent'


export default function DogsList() {
  return function (dispatch) {
    request('https://dog.ceo/api/breeds/list/all')
    .then(response => dispatch(setBreeds(response.body)))
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
  }