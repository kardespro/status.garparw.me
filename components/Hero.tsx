import { useState , useEffect } from 'react'
import axios from 'axios'
export default function Hero(){
  const [f,sf] = useState(true)
  const [a,sa] = useState(true)
  useEffect(() => {
    setTimeout(async() => {
      let Frontend = await axios.get("https://garparw.me")
    if(Frontend.status !== 200){
      sf(false)
    }
      let Api = await axios.get("https://api.garparw.me/")
      if(Api.status !== 200){
        sa(false)
      }
    })
  })
  return(
    <>
          <div className="pt-12">
      <h1 className="text-center font-bold">Service Status</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-6">
      <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p className="md:pl-12">Frontend</p>
        {f ? (
          <p className="pl-40 md:pl-72"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      ):(
       <p className="pl-40 md:pl-72"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      
        )}
      </div>
         <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p className="md:pl-12">API</p>
           {a ? (
             <p className="pl-48 md:pl-72"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      ):(
      <p className="pl-48 md:pl-72"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
           )}
      </div>
      </div>

    </>
  )
}