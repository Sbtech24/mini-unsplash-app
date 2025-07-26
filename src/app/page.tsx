"use client"
import { useContext,useEffect } from "react";
import ImageContainer from "@/components/ImageContainer";
import { Input } from "@/components/ui/input";
import { SearchContext } from "@/context/SearchContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("SearchContext.Provider is missing");
  }
  const { searchValue, handleSearch,setSearchValue } = context;



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/results")
    
      
  };


      useEffect(() => {
      setSearchValue(""); 
    });


  return (
    <>
  
    <header className="relative bg-[#DDE3EA] w-full p-20">
      <form onSubmit={handleSubmit}>
      <Input placeholder="Search for Photo" className="max-w-1/2 bg-white mx-auto" value={searchValue} onChange={handleSearch}/>
      </form>
    </header>
    <main className="absolute top-38 left-0 right-0 mb-4 ">
      <ImageContainer />
    </main>
    </>
  );
}
