import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Congrats from '../src/Congrats'
import GuessedWords from '../src/GuessedWords'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className='container'>
      <h1>Jotto </h1>
      <Congrats success={true} /> <br />
      <GuessedWords guessedWords={[
          {guessedWord : 'train', letterMatchCount : 2},
          {guessedWord : 'table', letterMatchCount : 3},
          {guessedWord : 'chair', letterMatchCount : 0}
      ]} />
      </div>
    )
    
  }
    
}

