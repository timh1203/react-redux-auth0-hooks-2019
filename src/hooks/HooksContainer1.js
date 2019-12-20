import React, { useState } from 'react'

const HooksContainer1 = () => {
  // HOOKS METHOD 1
  const [stateValue, setValue] = useState(0)

  // HOOKS METHOD 2
  // const stateValue = useState(0)[0]
  // const setValue = useState(0)[1]

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue - 1)
  }

  return (
    <div>
      HooksContainer1
      <br />
      <button onClick={() => incrementValue()}>Increment</button>
      <button onClick={() => decrementValue()}>Decrement</button>
      <br />
      <div>
        <p>Local State: {stateValue}</p>
      </div>
    </div>
  )
}


export default HooksContainer1
