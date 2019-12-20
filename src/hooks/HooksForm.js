import React, { useState, useReducer, useContext } from 'react'
import * as ACTIONS from '../store/actions/actions'
import * as UserHooksReducer from '../store/reducers/user_hooks_reducer'

const HooksForm = () => {
  // METHOD: Hooks
  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const handleChange = (e) => {
    setValueChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValueSubmit(e.target.name.value)
  }

  // METHOD: Hooks/UserReducer
  const [userState, userDispatch] = useReducer(UserHooksReducer.UserHooksReducer, UserHooksReducer.initialState)

  const handleReducerChange = (e) => {
    userDispatch(ACTIONS.user_input_change(e.target.value))
  }

  const handleReducerSubmit = (e) => {
    e.preventDefault()
    userDispatch(ACTIONS.user_input_submit(e.target.name2.value))
  }

  return (
    <div>
      <p>Hooks Method: {valueChange}, {valueSubmit}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" /> Name (Hooks):
        <input id='name' type='text' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>

      <p>Hooks/UserReducer Method: {userState.user_text_change}, {userState.user_text_submit}</p>
      <form onSubmit={handleReducerSubmit}>
        <label htmlFor="name2" /> Name 2 (Hooks/UserReducer):
        <input id='name2' type='text' onChange={handleReducerChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default HooksForm
