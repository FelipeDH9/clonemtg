import { createContext, useState } from 'react'
export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {
  const [cardName, setCardName] = useState()

  return (
    <SearchContext.Provider value={{ cardName, setCardName }}>
      {children}
    </SearchContext.Provider>
  )
}
