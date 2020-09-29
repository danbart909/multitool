import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NavBar from './NavBar'
import Alphabetizer from './comps/Alphabetizer' 
import Converter from './comps/Converter'
import Home from './comps/Home'
import Something from './comps/Something'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      km: 0
    }
  }

  // kmMiles = (e) => {
  //   let value = e.target.value

  //   this.setState({
  //     km: value
  //   })
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
              render={(props) => <Converter {...props}
                uberstate={this.state}
                // kmMiles={(e) => this.kmMiles(e)}
              />}
            />
            <Route
              path='/Something'
              render={(props) => <Something {...props} />}
            />
          </Switch>
        </div>
      </div>
    )
  }
}