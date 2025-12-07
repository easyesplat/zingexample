import React from 'react';

const PartneredWith = () => {
    const stats = [
        { value: "75+", label: "Years of Experience" },
        { value: "100%", label: "Customer Satisfaction" },
        { value: "99%", label: "Customer Retention" },
        { value: "100+", label: "Satisfied Clients" },
    ];

    return (
        <div className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-900">Partnered with</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartneredWith;
