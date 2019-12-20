import React, { useState, useEffect } from 'react'

const HooksContainer1 = () => {
  // HOOKS METHOD 1
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)

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
    </div>
  )
}


export default HooksContainer1
