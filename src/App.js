import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NavBar from './NavBar'
import Alphabetizer from './comps/Alphabetizer' 
import Converter from './comps/Converter'
import Home from './comps/Home'
import Clock from './comps/Clock'

export default class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <div id='overlord'>
        <div id='overlord-navbar'>
          <NavBar />
        </div>
        <div id='overlord-main'>
          <Switch>
            <Route
              exact path='/'
              render={(props) => <Home {...props} />}
            />
            <Route
              path='/Alphabetizer'
              render={(props) => <Alphabetizer {...props} />}
            />
            <Route
              path='/Converter'
              render={(props) => <Converter {...props} />}
              // render={(props) => <Converter {...props} state={this.state} />}
            />
            <Route
              path='/Clock'
              render={(props) => <Clock {...props} />}
            />
          </Switch>
        </div>
      </div>
    )
  }
}