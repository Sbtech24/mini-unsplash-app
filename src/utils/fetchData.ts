import axios from "axios"
export default async function fetchData(query:string){
     const res = await axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`)
        const info = res.data
        console.log(info)
}

