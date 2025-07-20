import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllVisas = () => {
    const [visas, setVisas] = useState([]);
    const [filteredVisas, setFilteredVisas] = useState([]);
    const [selectedType, setSelectedType] = useState('All');

    useEffect(() => {
        fetch('http://localhost:5001/visa') // Replace with your actual backend URL
            .then(res => res.json())
            .then(data => {
                setVisas(data);
                setFilteredVisas(data);
            });
    }, []);

    // Extract unique visa types for dropdown
    const visaTypes = ['All', ...new Set(visas.map(v => v.visa_type))];

    const handleFilterChange = (e) => {
        const type = e.target.value;
        setSelectedType(type);
        if (type === 'All') {
            setFilteredVisas(visas);
        } else {
            const filtered = visas.filter(v => v.visa_type === type);
            setFilteredVisas(filtered);
        }
    };

    return (
        <div className="p-8 sm:p-16 flex flex-col">
            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <h2></h2>
                <h2 className="text-2xl font-bold text-center mb-10 pt-12 sm:pt-8">All Visas</h2>
                <div className="w-48  flex justify-end">
                    <select
                        value={selectedType}
                        onChange={handleFilterChange}
                        className="select select-bordered w-full max-w-xs"
                    >
                        {visaTypes.map((type, idx) => (
                            <option key={idx} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Visa Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-5 lg:grid-cols-4 gap-8">
                {filteredVisas.map(visa => (
                    <div
                        key={visa._id}
                        className="bg-base-100 border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={visa.country_image}
                            alt={visa.country_name}
                            className="w-full p-3 rounded-2xl h-48 object-cover"
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
                                className="inline-block mt-4 pt-2 btn btn-primary w-full"
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
