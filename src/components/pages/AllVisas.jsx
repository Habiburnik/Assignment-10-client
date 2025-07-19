import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllVisas = () => {
    const [visas, setVisas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/visa') // replace with your actual backend URL
            .then(res => res.json())
            .then(data => setVisas(data));
    }, []);

    return (
        <div className=" md:p-16">
            <h2 className="pt-8 text-4xl font-bold text-center mb-10">All Visas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {visas.map(visa => (
                    <div
                        key={visa._id}
                        className="bg-base-100 border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={visa.country_image}
                            alt={visa.country_name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl font-semibold">{visa.country_name}</h3>
                            <p><span className="font-medium">Visa Type:</span> {visa.visa_type}</p>
                            <p><span className="font-medium">Processing:</span> {visa.processing_time}</p>
                            <p><span className="font-medium">Fee:</span> ${visa.fee}</p>
                            <p><span className="font-medium">Validity:</span> {visa.validity}</p>
                            <p><span className="font-medium">Apply:</span> {visa.application_method}</p>
                            <Link
                                to={`/visa/${visa._id}`}
                                className="inline-block mt-4 btn btn-primary w-full"
                            >
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllVisas;
