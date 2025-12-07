import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute w-full z-50 top-0 left-0 bg-transparent py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-3xl font-bold text-blue-600 tracking-tighter flex items-center gap-2">
                            Zing
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-10 items-center">
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 text-base">Services</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 text-base">Case Studies</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 text-base">About Us</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 text-base">Blog</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Services</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Case Studies</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">About Us</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Blog</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
