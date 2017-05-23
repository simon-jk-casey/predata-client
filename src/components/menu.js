import React from 'react'

module.exports = ({state, dispatch}) => {
  if (state.isAuthenticated) {
    return (
      <div className='menuBar'>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/profile'})}>Profile</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/devices'})}>Devices</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/dataEntry'})}>Data Entry</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/history'})}>History</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/views'})}>Data Views</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div className='menuBar'>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/register'})}>REGISTER</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/about'})}>ABOUT</button>
        <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/contact'})}>CONTACT</button>
      </div>
    )
  }
}
