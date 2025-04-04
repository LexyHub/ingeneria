import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b-2 border-black border-opacity-10 py-4 px-7 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 mr-4 rounded-md hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <FiMenu className="text-2xl text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold flex items-center">
            <span className="mr-2">💼</span> Desk de Estudio <span className="mx-2 text-gray-400">|</span> <span className="text-primary">💎 Litigios</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
