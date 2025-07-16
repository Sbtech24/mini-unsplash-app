"use client"

import { useState,createContext,ReactNode } from "react"

interface SearchContextType {
    searchValue:string,
    handleSearch:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext< SearchContextType| undefined>(undefined)


const SearchProvider = ({ children }: SearchProviderProps) => {
    

  const [searchValue,setSearchValue] = useState<string>(" ")


 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setSearchValue(e.target.value);

  };
  return(
    <SearchContext.Provider value={{searchValue,handleSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider