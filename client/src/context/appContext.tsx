import React, { useState, useReducer, useContext } from 'react'

import reducer from './reducer'

import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'

interface AppContextState {
  isLoading: boolean
  showAlert: string | boolean | null
  alextText: string
  alertType: string
  // displayAlert: boolean | string
}

export const initialState: AppContextState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

interface AppContextType extends AppState {
  displayAlert: () => void
}

const AppContext = React.createContext<AppContextType>({} as AppContextType)

const AppProvider = ({ children }: { children: any }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = (): AppContextType => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
