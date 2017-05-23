import React from 'react'

import Menu from '../components/menu'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <header>
        <h1>preData</h1>
        <h3>Data collection for community based predator control initiatives</h3>
      </header>
      <Menu state={state} dispatch={dispatch} />
    </div>
  )
}
