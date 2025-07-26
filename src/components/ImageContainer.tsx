"use client"
import { useState,useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import { UnsplashPhoto } from "@/types"
import fetchData from "@/utils/fetchData"


type Prop = {
  query?:string
}


export default function ImageContainer({query}:Prop){
    const [data,setData] = useState<UnsplashPhoto[]>()

    useEffect( () =>{
        const fetchData =async()=>{
          const searchQuery = query || "african";
            const res = await axios.get(`/api/unsplash?query=${searchQuery}`)
            setData(res?.data.results.slice(0,8))

        }
        fetchData()
        
        
    },[query])

  


    

   
    return(
      <div className="grid grid-cols-3 gap-2 w-full place-items-center">
        {data?.slice(0,6).map((item)=>{
            return (
                <div key={item.id} className="w-[200px] h-[240px] mt-1">
              <Image src={item.urls.regular} alt={item.alt_description||item.slug} width={item.width} height={item.height}/>
                </div>
            )
        })}
      </div>
    )
}