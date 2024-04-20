/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react"

function Github() {
    const [data , setData ] = useState([])

    useEffect(() => {
      fetch('https://api.github.com/users/dineshchoudhary2125').then(response => response.json()).then(data =>{
        console.log(data);
        setData(data)
      })
    }, [] )

  return (
    <div className="text-center m-4 bg-black text-white p-4 text-3xl flex justify-center items-center gap-5 h-screen">
        <img src={data.avatar_url} alt="Github dp" width={100} className=" rounded-full"/>
        <h3> Github followers: {data.followers}</h3>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dineshchoudhary2125')
    return response.json()
}