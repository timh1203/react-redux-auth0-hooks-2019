import React, { useState, useReducer, useContext } from 'react'

const HooksForm = () => {
  // METHOD: Hooks
  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const handleChange = (e) => {
    setValueChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValueChange(e.target.name.value)
  }

  return (
    <div>
      <p>Hooks Method: {valueChange}, {valueSubmit}</p>
      <form submit={handleSubmit}>
        <label htmlFor="name" /> Name (Hooks):
        <input id='name' type='text' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default HooksForm
