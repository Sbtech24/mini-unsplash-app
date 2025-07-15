"use client"
import { useState,useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import { UnsplashPhoto } from "@/types"



export default function ImageContainer(){
    const [data,setData] = useState<UnsplashPhoto[]>()

    useEffect( () =>{
        const fetchData =async(query:string)=>{
            const res = await axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`)
            setData(res?.data.results.slice(0,10))

        }
        fetchData("african")
        
    },[])

   
    return(
      <div>
        {data?.map((item)=>{
            return (
                <div key={item.id} className="max-5xl grid grid-cols-3">

              <Image src={item.urls.regular} alt={item.alt_description||item.slug} width={item.width} height={item.height}/>
                </div>
            )
        })}
      </div>
    )
}