import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Ready to get in touch? We'd love to hear from you. Email us or fill out the contact form.
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-300">
                                <span className="font-bold mr-2">Email:</span> hello@myzing.io
                            </p>
                            <div className="flex space-x-4 mt-6">
                                {/* Social Icons Placeholders */}
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">FB</a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">LI</a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">TW</a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">IG</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Zing. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition duration-300">Cancellation Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
