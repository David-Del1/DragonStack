import React, { Component } from 'react'

export class Generation extends Component {
  state = {
    generation: { generationId: 999, expiration: '2020-05-01' }
  };

  componentDidMount() {
    this.fetchGeneration();
  }
  

  fetchGeneration = () => {
    fetch('http://localhost:8000/generation')
      .then(res => res.json())
      .then(json => { 
        console.log('json',json)

        this.setState({});
      })
      .catch(err => console.error('error ',err))
  }

  render() {
    const { generation } = this.state;

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
}

export default Generation;
