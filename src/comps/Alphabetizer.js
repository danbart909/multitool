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
    let arr = start.split(",").sort()
    let alphabetized = []
    for (let i = 0; i < arr.length; i++) {
      alphabetized.push( <div className='alphabetizer-output-div-2'>{arr[i]}, </div> )
    }
    this.setState({
      alphabetized: alphabetized
    }, () => {console.log(arr, alphabetized)})
  }

  // alphabetize = () => {
  //   let start = this.state.alphabetizerForm
  //   let arr = start.split()
  //   let arr2 = arr.sort()
  //   let string = arr.join(`,`)
  //   let alphabetized = []
  //   for (let i = 0; i < arr2.length; i++) {
  //     alphabetized.push( <div className='alphabetized-output-div'>{arr2[i]}</div> )
  //   }
  //   this.setState({
  //     alphabetized: alphabetized
  //   }, () => {console.log(arr, arr2, alphabetized)})
  // }
  

  render() {
    return (
      <div id='alphabetizer-container'>

        <div id='alphabetizer-input-container'>

          <form id='alphabetizer-input-form'>
            <textarea id='alphabetizer-textarea' name='input' placeholder='What you write in this box will be divided by each space and line break. When you are finished, click the button below to return an alphabetical list.' onChange={(e) => {this.setState({ alphabetizerForm: e.target.value })}}/>
            <div id='alphabetizer-button' onClick={() => {this.alphabetize()}}>alphabetize!</div>
          </form>

        </div>

        <div id='alphabetizer-output-container'>
          <div id='alphabetizer-output'>
            <div id='alphabetizer-output-div-1'>{this.state.alphabetized}</div>
          </div>
        </div>

        {/* <button onClick={() => {console.log(this.state)}}>state</button> */}

      </div>
    )
  }
}