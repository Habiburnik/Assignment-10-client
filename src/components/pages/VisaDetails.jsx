import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './../../provider/AuthProvider';

const VisaDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [visa, setVisa] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5001/visa/${id}`)
            .then(res => res.json())
            .then(data => setVisa(data));
    }, [id]);

    const handleApplicationSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const application = {
            email: user?.email,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            appliedDate: new Date().toISOString(),
            visaFee: visa.fee,
            visaId: visa._id,
            visaTitle: visa.title,
            visaCountry: visa.country,
        };

        const res = await fetch('http://localhost:5001/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        });

        const data = await res.json();
        if (data.insertedId) {
            Swal.fire('Application Submitted!', '', 'success');
            setShowModal(false);
        }
    };

    if (!visa) return <div className="text-center py-12">Loading...</div>;

    return (
        <div className="pt-20 max-w-4xl mx-auto p-6">
            <img src={visa.photo} className="rounded-lg w-full max-h-[400px] object-cover mb-6" />
            <h2 className="text-3xl font-bold mb-2">{visa.title}</h2>
            <p><strong>Country:</strong> {visa.country_name}</p>
            <p><strong>Description:</strong> {visa.description}</p>
            <p><strong>Fee:</strong> ${visa.fee}</p>
            <p><strong>Created At:</strong> {new Date(visa.createdAt).toLocaleDateString()}</p>

            <button onClick={() => setShowModal(true)} className="btn btn-primary mt-6">Apply for the Visa</button>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(3px)',
                    WebkitBackdropFilter: 'blur(6px)',
                }}>
                    <form onSubmit={handleApplicationSubmit} className="bg-base-300 p-6 rounded-lg space-y-4 w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">Visa Application</h3>

                        <input type="email" value={user?.email} disabled className="input input-bordered w-full" />
                        <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" required />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                        <input type="text" value={new Date().toLocaleDateString()} disabled className="input input-bordered w-full" />
                        <input type="text" value={`$${visa.fee}`} disabled className="input input-bordered w-full" />

                        <div className="flex justify-end gap-2 pt-4">
                            <button type="button" onClick={() => setShowModal(false)} className="btn btn-outline">Cancel</button>
                            <button type="submit" className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default VisaDetails;
