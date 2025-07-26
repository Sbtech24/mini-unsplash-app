"use client"
import ImageContainer from "@/components/ImageContainer";
import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";


export default function Results() {
  const context = useContext(SearchContext)
  if(!context){
    throw new Error("Context not found ")
  }
  const {searchValue} = context

  return (
    <>
    <header className="bg-[#DDE3EA] w-full p-20">
      <h1>Search for result {searchValue}</h1>
    </header>
    <main>
      <ImageContainer query={searchValue}/>

    </main>
    </>
  );
}