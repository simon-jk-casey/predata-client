import React from 'react'
import { Link } from 'react-router-dom'

module.exports = ({state, dispatch}) => {
  if (state.isAuthenticated) {
    return (
      <div className='menuBar'>
        <button className='menuButton'>
          <Link to='/profile'>Profile</Link>
        </button>
        <button className='menuButton'>
          <Link to='/devices'>Devices</Link>
        </button>
        <button className='menuButton'>
          <Link to='/dataEntry'>Data Entry</Link>
        </button>
        <button className='menuButton'>
          <Link to='/history'>History</Link>
        </button>
        <button className='menuButton'>
          <Link to='/views'>Views</Link>
        </button>
        <button className='menuButton'>
          <Link to='/'>Log Out</Link>
        </button>
      </div>
    )
  } else {
    return (
      <div className='menuBar'>
        <button className='menuButton'>
          <Link to='/register'>REGISTER</Link>
        </button>
        <button className='menuButton'>
          <Link to='/about'>ABOUT</Link>
        </button>
        <button className='menuButton'>
          <Link to='/contact'>CONTACT</Link>
        </button>
      </div>
    )
  }
}
