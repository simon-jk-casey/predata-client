import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducers/reducer'

import App from './containers/App'

const initialState = {

}

const store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store

subscribe(() => {
  render(<App />, document.getElementById('app'))
})

dispatch({type: 'INIT'})
