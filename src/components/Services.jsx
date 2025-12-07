import React from 'react';

const Services = () => {
    const services = [
        { title: "Custom Software", description: "Tailored solutions to meet your specific business needs." },
        { title: "Mobile Applications", description: "iOS and Android apps that engage your customers." },
        { title: "Shopify & E-commerce", description: "High-converting online stores." },
        { title: "Digital Marketing", description: "Strategies to grow your brand and reach." },
        { title: "AI Solutions", description: "Leveraging artificial intelligence for business efficiency." },
    ];

    const technologies = [
        "Artificial Intelligence", "iOS", "React", "Digital Marketing", "Flutter",
        "Python", "Android", "UI/UX Design", "Social Media", "PHP", "Blockchain", "NodeJS"
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Expertise</h2>
                    <p className="mt-4 text-xl text-gray-600">Comprehensive solutions for your digital growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
                            <h3 className="text-xl font-bold text-blue-600 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies We Use</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <span key={index} className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 font-medium hover:bg-blue-50 hover:border-blue-200 transition duration-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
