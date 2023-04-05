import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Proxy(){
  const [it,setIT] = useState(true)
  const [sp,setSp] = useState(true)
  const [nl,setNl] = useState(true)
  useEffect(() => {
    setTimeout(async() => {
      let it1 = await axios.get("https://garparw.me/", { proxy : { protocol: "http", host: "188.74.210.207", port: 6286 , auth: { username: "mgsivsqa", password: "db1i98i8t4h3"}}})
      let sp1 = await axios.get("https://garparw.me/", { proxy : { protocol: "http", host: "154.95.36.199", port: 6893 , auth: { username: "mgsivsqa", password: "db1i98i8t4h3"}}})
      let nl1 = await axios.get("https://garparw.me/", { proxy : { protocol: "http", host: "45.94.47.66", port: 8110 , auth: { username: "mgsivsqa", password: "db1i98i8t4h3"}}})
      if(it1.status !== 200) {
        setIT(false)
      }
      if(sp1.status !== 200) {
        setSp(false)
      }
      if(nl1.status !== 200) {
        setNl(false)
      }
    })
  })
  return(
    <>
     <div className="pt-12">
      <h1 className="text-center font-bold">Proxy Status</h1>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-6">
         <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p>🇮🇹    Italy</p>
           {it ? (
            <p className="pl-44 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      ):(
      <p className="pl-44 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
           )}
      </div>
          <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p>🇪🇸    Spain</p>
       {it ? (
            <p className="pl-44 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      ):(
      <p className="pl-44 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
           )}
      </div>
           <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p>🇫🇷    France</p>
      <p className="pl-36 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      </div>
           <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p>🇳🇱    Netherlands</p>
      {nl ? (
            <p className="pl-44 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      ):(
      <p className="pl-44 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
           )}
      </div>
         </div>
     
    </>
  )
}