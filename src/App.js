import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context'
import * as HooksReducer from './store/reducers/hooks_reducer'
import * as ACTIONS from './store/actions/actions'

const App = () => {
  const [globalState, setGlobalState] = useState(0)

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(HooksReducer.HooksReducer, HooksReducer.initialState)

  const incrementGlobalState = () => {
    setGlobalState(globalState + 1)
  }

  const decrementGlobalState = () => {
    setGlobalState(globalState - 1)
  }

  const handleContextDispatchSuccess = () => {
    dispatchContextGlobal(ACTIONS.dispatch_success())
  }

  const handleContextDispatchFailure = () => {
    dispatchContextGlobal(ACTIONS.dispatch_failure())
  }

  return (
    <div>
      React
      <Context.Provider
        value={{
          globalState,
          incGlobalState: () => incrementGlobalState(),
          decGlobalState: () => decrementGlobalState(),
          reducerGlobalState: stateContextGlobal.hookprop2,
          dispatchContextTrue: () => handleContextDispatchSuccess(),
          dispatchContextFalse: () => handleContextDispatchFailure(),
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
