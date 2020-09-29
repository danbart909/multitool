import React, { Component } from 'react'

export default class Alphabetizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabetizerForm: '',
      alphabetized: ''
    }
  }

  alphabetize = () => {
    let start = this.state.alphabetizerForm
    let arr = start.split(`\n`).sort()
    let string = arr.join(`\n`)
    let alphabetized = []
    for (let i = 0; i < arr.length; i++) {
      alphabetized.push( <><div className='alphabetized-output-div'>{arr[i]}</div></> )
    }
    this.setState({
      alphabetized: alphabetized
    }, () => {console.log(arr, string, alphabetized)})
  }
  

  render() {
    return (
      <div id='alphabetizer-container'>

        <div id='alphabetizer-input-container'>

          <form id='alphabetizer-input-form'>
            <textarea id='alphabetizer-textarea' name='input' onChange={(e) => {this.setState({ alphabetizerForm: e.target.value })}}/>
            <div id='alphabetizer-button' onClick={() => {this.alphabetize()}}>alphabetize!</div>
          </form>

        </div>

        <div id='alphabetizer-output-container'>
          <div id='alphabetizer-output'>
            <span id='alphabetizer-output-span'>{this.state.alphabetized}</span>
          </div>
        </div>

        {/* <button onClick={() => {console.log(this.state)}}>state</button> */}

      </div>
    )
  }
}