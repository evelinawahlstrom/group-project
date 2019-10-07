import React, {Component} from 'react'
import request from 'superagent'


export default class DogsList extends Component {
    state = { dogBreeds: null }
  
    componentDidMount() {
      /*{DidMount MEANS the component is rendered into the real DOM. "It's showtime"}*/
      request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
          const breeds = Object.keys(response.body.message)
          // transforms the response.bodu.message into an array of dog breeds
          this.updateBreeds(breeds)
        })
        .catch(console.error)
    }
  
    updateBreeds(breeds) {
      this.setState({
        dogBreeds: breeds
      })
    }
  
    render() {
      return <DogsList dogBreeds={this.state.dogBreeds} />
    }
  }