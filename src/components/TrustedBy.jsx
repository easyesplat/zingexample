import React from 'react';

const TrustedBy = () => {
    const brands = [
        "AppSumo", "GlassMedia", "Ferguson Farms", "TechStart", "InnovateX"
    ];

    return (
        <div className="py-10 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-6">Trusted by</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                    {brands.map((brand, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
