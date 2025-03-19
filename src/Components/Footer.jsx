import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full bg-gradient-to-r from-blue-400 to-emerald-400 text-white py-8'>
            <div className='container mx-auto px-4'>
                {/* Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Column 1: Quick Links */}
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li><a href='#home' className='hover:text-blue-200 transition-all'>Home</a></li>
                            <li><a href='#about' className='hover:text-blue-200 transition-all'>About</a></li>
                            <li><a href='#tutorial' className='hover:text-blue-200 transition-all'>Tutorial</a></li>
                            <li><a href='#contact' className='hover:text-blue-200 transition-all'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Social Media */}
                    <div className='text-center'>
                        <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
                        <div className='flex justify-center space-x-4'>
                            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-200 transition-all'>
                                <i className='bx bxl-twitter text-2xl'></i>
                            </a>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-200 transition-all'>
                                <i className='bx bxl-facebook text-2xl'></i>
                            </a>
                            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-200 transition-all'>
                                <i className='bx bxl-instagram text-2xl'></i>
                            </a>
                            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-200 transition-all'>
                                <i className='bx bxl-linkedin text-2xl'></i>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className='text-center md:text-right'>
                        <h3 className='text-xl font-bold mb-4'>Contact Info</h3>
                        <p className='mb-2'>Email: info@coderarmy.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className='border-t border-white mt-8 pt-4 text-center'>
                    <p>&copy; {new Date().getFullYear()} Coder Army. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;