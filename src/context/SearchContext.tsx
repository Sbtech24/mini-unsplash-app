"use client"

import { useState,createContext,ReactNode,useEffect } from "react"

interface SearchContextType {
    searchValue:string,
    handleSearch:(e: React.ChangeEvent<HTMLInputElement>)=>void;
    setSearchValue: (value: React.SetStateAction<string>) => void
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext< SearchContextType| undefined>(undefined)


const SearchProvider = ({ children }: SearchProviderProps) => {
    

  const [searchValue,setSearchValue] = useState<string>(" ")

    useEffect(() => {
    setSearchValue(""); 
  }, []);


 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    
    setSearchValue(e.target.value);
    
  };
  return(
    <SearchContext.Provider value={{searchValue,handleSearch,setSearchValue}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider