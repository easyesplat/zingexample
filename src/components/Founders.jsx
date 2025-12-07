import React from 'react';

const Founders = () => {
    const founders = [
        {
            name: "Dan Melnick",
            role: "Partner",
            bio: "Originally from the Chicago area, now based in Austin. A serial entrepreneur who has founded several companies. Partnered with Qasim in 2021.",
        },
        {
            name: "Qasim Masud",
            role: "CTO",
            bio: "An industry veteran since 2009. Founded his first company in 2016. Serves as the Chief Technology Officer at Zing, committed to innovation.",
        },
        {
            name: "Effy Gittler",
            role: "Co-founder",
            bio: "Joined the team as a co-founder in 2023. Founded a mobile application and partnered with Dan and Qasim to deliver exceptional experiences.",
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet The Founders</h2>
                    <p className="mt-4 text-xl text-gray-600">The team driving your success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {founders.map((founder, index) => (
                        <div key={index} className="text-center">
                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 flex items-center justify-center text-4xl text-gray-400">
                                {/* Placeholder for image */}
                                {founder.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                            <p className="text-blue-600 font-medium mb-4">{founder.role}</p>
                            <p className="text-gray-600 leading-relaxed px-4">
                                {founder.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Founders;
