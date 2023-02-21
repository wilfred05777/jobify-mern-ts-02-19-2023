import React, { useState, useReducer, useContext } from 'react'

import reducer from './reducer'
import { DISPLAY_ALERT } from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const AppContext = React.createContext()

const AppProvider = ({ children }: { children: any }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
