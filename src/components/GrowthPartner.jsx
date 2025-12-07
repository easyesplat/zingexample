import React from 'react';

const GrowthPartner = () => {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Case Study</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Growth Partner Success Through Marketing
                        </h2>
                        <h3 className="text-xl text-gray-600 mb-6">
                            Helping Brands Scale Their Revenue
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We partnered with Ferguson Farms to revamp their digital presence. By implementing a targeted marketing strategy and optimizing their e-commerce platform, we achieved significant growth in their online sales and customer engagement. Our data-driven approach ensured that every dollar spent yielded measurable results.
                        </p>
                        <a href="#" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg">
                            Fuel Your Business
                        </a>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-100 rounded-xl transform rotate-2"></div>
                        <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                    FF
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Ferguson Farms</h4>
                                    <p className="text-sm text-gray-500">Organic Produce</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                "Zing transformed our business. Their expertise in digital marketing and web development helped us reach new heights. We couldn't be happier with the results."
                            </blockquote>
                            <div className="flex text-yellow-400">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthPartner;
