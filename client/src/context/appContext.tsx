import React, { useState, useReducer, useContext } from 'react'

import reducer from './reducer'

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

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
