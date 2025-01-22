'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    FaAddressCard,
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
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transition-all duration-300 z-50 ${
                    isSidebarOpen ? 'w-64' : 'w-16'
                }`}
            >
                <div className="flex items-center justify-start px-4 pt-5 pb-6 border-b border-gray-700">
                    <button onClick={toggleSidebar} className="focus:outline-none">
                        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                    <span className="text-xl font-bold truncate pl-3">
                        {isSidebarOpen ? '' : ''}
                    </span>
                </div>

                {/* Sidebar Menu */}
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 text-white hover:underline hover:text-blue-400 transition cursor-pointer">
                        <Link href="/account"><FaAddressCard size={20}/></Link>
                        {isSidebarOpen && <Link href="/account">사용자 관리</Link>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 text-white hover:underline hover:text-blue-400 transition cursor-pointer">
                        <Link href="/device"><FaChalkboard size={20}/></Link>
                        {isSidebarOpen && <Link href="/device">단말기 관리</Link>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 text-white hover:underline hover:text-blue-400 transition cursor-pointer">
                        <Link href="/price"><FaShoppingCart size={20}/></Link>
                        {isSidebarOpen && <Link href="/price">요금제 관리</Link>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 text-white hover:underline hover:text-blue-400 transition cursor-pointer">
                        <FaChartBar size={20}/>
                        {isSidebarOpen && <Link href="/">Reports</Link>}
                    </li>
                    <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 text-white hover:underline hover:text-blue-400 transition cursor-pointer">
                        <FaLayerGroup size={20}/>
                        {isSidebarOpen && <Link href="/">Integrations</Link>}
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
                    <Link href="/" className="text-2xl font-bold hover:underline">KOREA ORBCOMM</Link>
                    <ul className="flex space-x-8">
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaChalkboard />
                            <Link href="/user">사용자 관리</Link>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaShoppingCart />
                            <Link href="/orders">Orders</Link>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaChartBar />
                            <Link href="/reports">Reports</Link>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 transition">
                            <FaLayerGroup />
                            <Link href="/integrations">Integrations</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Breadcrumbs */}
            <div
                className={`fixed top-[64px] right-0 bg-gray-100 px-4 py-2 text-sm text-gray-600 shadow-md z-50 transition-all duration-300 ${
                    isSidebarOpen ? 'left-64' : 'left-16'
                }`}
            >
                <span>Home</span>
                {/*<span>Home / Dashboard</span>*/}
            </div>
        </div>
    );
};

export default Navbar;
