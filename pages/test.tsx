import { useState } from "react";
import cn from "classnames";

const Drawer = ({ isOpen, onClose, DrawerContent, DrawerTitle }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);

  const handleClose = () => {
    setIsDrawerOpen(false);
    onClose();
  };

  return (
    <div className={cn("fixed inset-y-0 left-0 w-1/2 bg-white rounded-r-xl shadow-lg transform transition duration-300 ease-in-out", { "-translate-x-full": !isDrawerOpen })}>
      <div className="flex justify-end p-4">
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        </div>
       <p className="text-center font-bold">{DrawerTitle}</p>
     
      <div className="px-4 pb-4 pt-4">
        <p>{DrawerContent}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-2 px-4">
        <h1 className="text-xl font-bold">My App</h1>
      </header>
      <main className="flex-1 p-4">
        <p>Page content goes here</p>
        <button onClick={handleOpen} className="fixed left-0 top-0 m-4 rounded-full bg-blue-500 text-white p-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Open Drawer
        </button>
        {isDrawerOpen && <Drawer isOpen={isDrawerOpen} onClose={handleClose} DrawerContent="Jsksksk" DrawerTitle="Database Detalis" />}
      </main>
    </div>
  );
}