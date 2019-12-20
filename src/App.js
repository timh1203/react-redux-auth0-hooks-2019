import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context'
import * as HooksReducer from './store/reducers/hooks_reducer'
import * as UserHooksReducer from './store/reducers/user_hooks_reducer'
import * as ACTIONS from './store/actions/actions'

const App = () => {
  // METHOD: Hooks
  const [globalState, setGlobalState] = useState(0)

  const incrementGlobalState = () => {
    setGlobalState(globalState + 1)
  }

  const decrementGlobalState = () => {
    setGlobalState(globalState - 1)
  }

  // METHOD: Hooks/UserReducer
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(HooksReducer.HooksReducer, HooksReducer.initialState)

  const handleContextDispatchSuccess = () => {
    dispatchContextGlobal(ACTIONS.dispatch_success())
  }

  const handleContextDispatchFailure = () => {
    dispatchContextGlobal(ACTIONS.dispatch_failure())
  }

  // METHOD: Hooks/UserReducer/Context
  const [userContextGlobal, dispatchUserContextGlobal] = useReducer(UserHooksReducer.UserHooksReducer, UserHooksReducer.initialState)

  const handleContextChange = (e) => {
    dispatchUserContextGlobal(ACTIONS.user_input_change(e.target.value))
  }

  const handleContextSubmit = (e) => {
    e.preventDefault()
    dispatchUserContextGlobal(ACTIONS.user_input_submit(e.target.name2.value))
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
          user_text_change: userContextGlobal.user_text_change,
          user_text_submit: userContextGlobal.user_text_submit,
          handleContextChange: (e) => handleContextChange(e),
          handleContextSubmit: (e) => handleContextSubmit(e),
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
