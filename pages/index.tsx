import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Proxy from '../components/Proxy'
import Database from '../components/Database'
import Hero from '../components/Hero'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <div className="bg-white p-4 w-72  rounded-md grid grid-cols-3 flex justify-center items-center">
      <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>

</div>
      <div className="font-bold text-xl">Garparw</div>
      <div className="pl-12 text-sm " onClick={() => router.push("https://garparw.me/")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

</div>
      </div>
      <Hero />
      <Proxy />
      <Database />
      <div className="flex justify-center items-center pt-24">
      <p className="text-sm font-bold text-blue-400">Made With TypeScript , Next.js , TailwindCss and <button className="rounded-xl pl-4 border-2 border-gray-900" onClick={() => router.push("https://github.com/kardespro")}>❤<span className="pl-4">.</span></button></p>
      </div>
      <div className="pt-24"></div>
    </>
  )
}

export default Home