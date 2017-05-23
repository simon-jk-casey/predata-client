import clone from 'clone'

function reducer (state, action) {
  let newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    default:
      return newState
  }
}

module.exports = reducer
