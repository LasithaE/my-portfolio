import React from "react";
import { X } from "@phosphor-icons/react";


const TranslucentModal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 py-10 flex items-center justify-center scrollbar-hide">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={(e)=>{
          e.stopPropagation();
          onClose();
        }}
      ></div>

      <div className="relative z-10 bg-white/60 backdrop-blur-lg rounded-2xl scrollbar shadow-xl max-w-lg w-full p-6 overflow-y-auto scrollbar-hidden max-h-full">
   <div>  <button
          onClick={onClose}
          className="absolute top-8 right-10 text-gray-700 hover:text-black z-20"
        >
          <X size={20} weight="regular" />
        </button>
        <div><div className="font-bold left-10 absolute text-[24px]">{title}</div></div></div>   

        <div className="mt-2">
          <div className="w-full pt-16 pb-10 px-4 flex flex-col justify-center">
            <div className="relative w-full">
             {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslucentModal;
