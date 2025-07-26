"use client";
import ImageContainer from "@/components/ImageContainer";
import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Results() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Context not found ");
  }
  const { searchValue } = context;

  return (
    <>
      <header className="bg-[#DDE3EA] w-full p-20">
        <Link href={"/"} className="flex gap-1 items-center cursor-pointer font-bold text-2xl sm:text-3xl">
          <ArrowLeft />
          <h1 >Search for result {searchValue}</h1>
        </Link>
      </header>
      <main>
        <ImageContainer query={searchValue} />
      </main>
    </>
  );
}
