"use client"
import { useContext } from "react";
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
  const { searchValue, handleSearch } = context;



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/results")
      
  };


  return (
    <>
  
    <header className="bg-[#DDE3EA] w-full p-20">
      <form onSubmit={handleSubmit}>
      <Input placeholder="Search for Photo" className="max-w-1/2 bg-white mx-auto" value={searchValue} onChange={handleSearch}/>
      </form>
    </header>
    <main>
      <ImageContainer/>
    </main>
    </>
  );
}
