import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div id='navbar-container'>
        <div id='navbar'>
          <div id='navbar1' className='navbar-bar'>
            <NavLink exact={true} activeClassName='is-active' to='/' id='navlink-home' className='navlink'>
              <span>Home</span>
            </NavLink>
          </div>
          <div id='navbar2' className='navbar-bar'>
            <NavLink activeClassName='is-active' to='/Alphabetizer' id='navlink-alphabetizer' className='navlink'>
              <span>Alphabetizer</span>
            </NavLink>
          </div>
          <div id='navbar3' className='navbar-bar'>
            <NavLink activeClassName='is-active' to='/Converter' id='navlink-converter' className='navlink'>
              <span>Converter</span>
            </NavLink>
          </div>
          <div id='navbar4' className='navbar-bar'>
            <NavLink activeClassName='is-active' to='/Something' id='navlink-something' className='navlink'>
              <span>Something</span>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}