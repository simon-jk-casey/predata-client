import React from 'react'

import loginSvc from '../services/login'

module.exports = ({state, dispatch}) => {
  const username = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {field: 'username', vale: e.target.value}})
  const password = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {field: 'password', vale: e.target.value}})
  const loginButton = (e) => {
    e.preventDefault()
    loginSvc(state.loginDetails, dispatch)
  }
  return (
    <div className='loginContainer'>
      <form id='userLogin'>
        <div className='usrDiv col-12 col-m-12'>
          
        </div>
      </form>
    </div>
  )
}
