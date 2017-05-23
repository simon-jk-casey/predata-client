import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducers/reducer'

const initialState = {

}

const store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store

subscribe(() => {
  render()
})

dispatch({type: 'INIT'})
