import React, { useState } from 'react';

const Navbar = ({ scrollToAbout, scrollToTutorial, scrollToContact }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md '>
            {/* Logo */}
            <h1 className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer font-semibold'>Coder Army</h1>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex items-center gap-12 font-semibold text-base'>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' onClick={scrollToAbout}>About</li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' onClick={scrollToTutorial}>Tutorial</li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' onClick={scrollToContact}>Contact</li>
            </ul>

            {/* Search Bar */}
            <div className='relative hidden md:flex items-center justify-center gap-3'>
                <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
                <input type='text' placeholder='Search...' className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500' />
            </div>

            {/* Mobile Menu Toggle Icon (Visible only on small screens) */}
            <i className='bx bx-menu lg:hidden block text-2xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            {/* Mobile Menu (Visible only on small screens) */}
            <div className={`lg:hidden absolute top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
                <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer' onClick={scrollToAbout}>About</li>
                <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer' onClick={scrollToTutorial}>Tutorial</li>
                <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer' onClick={scrollToContact}>Contact</li>
            </div>
        </header>
    );
};

export default Navbar;