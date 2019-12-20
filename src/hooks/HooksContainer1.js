import React, { useState, useEffect, useReducer, useContext } from 'react'
import * as Reducer from '../store/reducers/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context'

const HooksContainer1 = () => {
  const context = useContext(Context)

  // HOOKS METHOD 1
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)
  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  // HOOKS METHOD 2
  // const stateValue = useState(0)[0]
  // const setValue = useState(0)[1]

  useEffect(() => {
    // Simulate API request with setTimeout
    // Inserting `stateValue` in the array means that anytime this value is changed,
    // The useEffect function will run again, essentially back to "useEffect working"
    setTimeout(() => setUseEffectValue("useEffect working"), 3000)
  }, [stateValue])

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue - 1)
  }

  const changeUseEffectValue = () => {
    setUseEffectValue("useEffect was changed")
  }

  const handleDispatchSuccess = () => {
    dispatch(ACTIONS.dispatch_success())
  }

  // Can use this method like success or just in the button itself
  // See below
  // const handleDispatchFailure = () => {
  //   dispatch(ACTIONS.dispatch_failure())
  // }

  return (
    <div>
      <p>HooksContainer1</p>
      <div>
        <span>Local State: {stateValue}</span>
        <button onClick={() => incrementValue()}>Increment</button>
        <button onClick={() => decrementValue()}>Decrement</button>
      </div>
      <br />
      <div>
        <span>{useEffectValue || 'Making API call...'}</span>
        <button onClick={() => changeUseEffectValue()}>Change UseEffect Value</button>
      </div>
      <br />
      <div>
        <span>Hook prop: {state.hookprop1}</span>
        <button onClick={() => handleDispatchSuccess()}>Change UseEffect Success</button>
        <button onClick={() => { dispatch(ACTIONS.dispatch_failure()) }}>Change UseEffect Failure</button>
      </div>
      <div>
        <span>Context Global State: {context.globalState}</span>
        <button onClick={() => context.incGlobalState()}>Change UseEffect Success</button>
        <button onClick={() => context.decGlobalState()}>Change UseEffect Failure</button>
      </div>
    </div>
  )
}


export default HooksContainer1
