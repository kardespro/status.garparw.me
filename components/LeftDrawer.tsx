import { useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
interface DrawerProps { isOpen: boolean; onClose: () => void; DrawerContent: string; DrawerTitle: String; DrawerContentTwo: String }
const Drawer = ({ isOpen, onClose, DrawerContent, DrawerTitle , DrawerContentTwo }: DrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);

  const handleClose = () => {
    setIsDrawerOpen(false);
    onClose();
  };

  return (
    <motion.div 
      className={cn("fixed inset-y-0 left-0 w-1/2 bg-white rounded-r-xl shadow-lg", { "-translate-x-full": !isDrawerOpen })}
      initial={{ x: "-100%" }}
      animate={{ x: isDrawerOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3 }}
    >
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
        <p>{DrawerContentTwo}</p>
      </div>
    </motion.div>
  );
};



export default Drawer