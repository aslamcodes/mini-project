import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose = () => {} }) => {
  return (
    isOpen && (
      <aside className="w-64 bg-red-100 fixed left-0 bottom-0 top-0">
        <div className="p-2" onClick={onClose}>
          <FaTimes />
        </div>
        <div>
          <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
            <option>SKCT</option>
            <option>Zoho</option>
            <option>Library</option>
          </select>
        </div>
        <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
          <ul className="space-y-2 flex flex-col">
            <li>Library</li>
            <li>Aroma</li>
            <li>IT</li>
            <li>Hostel</li>
          </ul>
        </div>
      </aside>
    )
  );
};

export default Sidebar;
