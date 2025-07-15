import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext()

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const showLoader = () => setLoading(true)
  const hideLoader = () => setLoading(false)

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => {
  const context = useContext(LoaderContext)
  if (!context) {
    throw new Error('useLoader debe usarse dentro de LoaderProvider')
  }
  return context
}
