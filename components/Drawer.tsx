import { useState } from "react";
import cn from "classnames";
interface DrawerProps { isOpen: boolean; onClose: () => void; DrawerContent: string; }
const Drawer = ({ isOpen, onClose, DrawerContent }: DrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);

  const handleClose = () => {
    setIsDrawerOpen(false);
    onClose();
  };

  return (
    <>
    <div className={cn("fixed bottom-0 left-0 right-0 bg-white rounded-t-xl", { "h-full": isDrawerOpen })}>
      <div className="flex justify-center items-center p-4 grid grid-cols-2 gap-7">
        <p className="text-center font-bold">PAST INCIDENTS</p>
      
        </div>
       
      <div className="px-4 pb-4">
         <p>{DrawerContent}</p>
      </div>
    </div>
      
</>
  );
};
export default Drawer
