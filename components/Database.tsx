import Drawer from './Drawer'
import { useState , useEffect } from 'react'
import LeftDrawer from './LeftDrawer'
export default function Database(){
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawertOpen, setIsDrawertOpen] = useState(false);

  const handletOpen = () => {
    setIsDrawertOpen(true);
  };

  const handletClose = () => {
    setIsDrawertOpen(false);
  };
  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };
  
  useEffect(() => {
    setIsDrawerOpen(false);
  })
  return(
    <>
    <div className="pt-12">
      <h1 className="text-center font-bold">Database Status</h1>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-6">
           <button className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2" onClick={handletOpen}>
      <p>MongoDB</p>
      <p className="pl-40 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      </button>
            <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p>RedisDB</p>
      <p className="pl-40 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      </div>
            <div className="p-4 bg-white shadow mb-1.5 rounded-xl py-3 px-3  flex space-x-2">
      <p>Nego.db</p>
      <p className="pl-40 md:pl-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p>
      </div>
          </div>
      <div className="pt-24"></div>
     <Drawer isOpen={isDrawerOpen} onClose={handleClose} DrawerContent="5.03.2023  Garparw v3 Yapılmaya Başlandı <br />"/>
      {isDrawertOpen && <LeftDrawer isOpen={isDrawertOpen} onClose={handletClose} DrawerContent="Location: 🇫🇷 France" DrawerTitle="Database Detalis" DrawerContentTwo="Server Memory: 10 Gb" />}
    </>
  )
}