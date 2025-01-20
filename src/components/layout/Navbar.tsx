'use client';

import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaChalkboard,
    FaShoppingCart,
    FaChartBar,
    FaLayerGroup,
} from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transition-all duration-300 ${
                    isSidebarOpen ? 'w-64' : 'w-16'
                }`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <span className="text-xl font-bold truncate">
            {isSidebarOpen ? 'KOREA ORBCOMM' : 'KO'}
          </span>
                    <button onClick={toggleSidebar} className="focus:outline-none">
                        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Sidebar Menu */}
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
                        <FaChalkboard size={20} />
                        {isSidebarOpen && <span>Dashboard</span>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
                        <FaShoppingCart size={20} />
                        {isSidebarOpen && <span>Orders</span>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
                        <FaChartBar size={20} />
                        {isSidebarOpen && <span>Reports</span>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
                        <FaLayerGroup size={20} />
                        {isSidebarOpen && <span>Integrations</span>}
                    </li>
                </ul>
            </div>

            {/* Navbar */}
            <nav
                className={`fixed top-0 right-0 bg-gray-800 text-white shadow-lg z-50 transition-all duration-300 ${
                    isSidebarOpen ? 'left-64' : 'left-16'
                }`}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="text-2xl font-bold">KOREA ORBCOMM</div>
                    <ul className="flex space-x-8">
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaChalkboard />
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaShoppingCart />
                            <a href="/orders">Orders</a>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaChartBar />
                            <a href="/reports">Reports</a>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaLayerGroup />
                            <a href="/integrations">Integrations</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Breadcrumbs */}
            <div
                className={`fixed top-[64px] right-0 bg-gray-100 px-4 py-2 text-sm text-gray-600 shadow-md z-40 transition-all duration-300 ${
                    isSidebarOpen ? 'left-64' : 'left-16'
                }`}
            >
                <span>Home / Dashboard</span>
            </div>
        </div>
    );
};

export default Navbar;
