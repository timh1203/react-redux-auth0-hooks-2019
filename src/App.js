import React, { useState } from 'react';
import Routes from './routes';
import Context from './utils/context'

const App = () => {
  const [globalState, setGlobalState] = useState(0)

  const incrementGlobalState = () => {
    setGlobalState(globalState + 1)
  }

  const decrementGlobalState = () => {
    setGlobalState(globalState - 1)
  }

  return (
    <div>
      React
      <Context.Provider
        value={{
          globalState,
          incGlobalState: () => incrementGlobalState(),
          decGlobalState: () => decrementGlobalState()
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
