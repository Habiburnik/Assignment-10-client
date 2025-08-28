import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestVisa = () => {
    const [latestVisas, setLatestVisas] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-phi-red.vercel.app/visa')
            .then(res => res.json())
            .then(data => {
                // Sort by createdAt in descending order
                const sorted = data
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 6); // Take the latest 6
                setLatestVisas(sorted);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Latest Visa Offers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestVisas.map(visa => (
                    <div key={visa._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={visa.country_image} alt={visa.country_name} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">{visa.country_name}</h3>
                            <p><strong>Type:</strong> {visa.visa_type}</p>
                            <p><strong>Processing Time:</strong> {visa.processing_time}</p>
                            <p><strong>Fee:</strong> ${visa.fee}</p>
                            <p><strong>Validity:</strong> {visa.validity}</p>
                            <p><strong>Application Method:</strong> {visa.application_method}</p>
                            <div className="card-actions mt-4 justify-end">
                                <Link to={`/visa/${visa._id}`} className="btn btn-primary">See Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link to="/visas" className="btn btn-outline btn-primary">
                    See All Visas
                </Link>
            </div>
            
        
        </div>
    );
};

export default LatestVisa;
