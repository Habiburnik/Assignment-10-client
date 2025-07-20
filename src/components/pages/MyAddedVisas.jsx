import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const MyAddedVisas = () => {
    const { user } = useContext(AuthContext);
    const [visas, setVisas] = useState([]);
    const [editingVisa, setEditingVisa] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5001/my-visas?added_by=${user.email}`)
            .then(res => res.json())
            .then(data => setVisas(data));
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this visa!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/visa/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setVisas(prev => prev.filter(v => v._id !== id));
                            Swal.fire('Deleted!', 'Visa has been deleted.', 'success');
                        }
                    });
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedVisa = {
            country_name: form.country_name.value,
            photo: form.photo.value,
            type: form.type.value,
            processing_time: form.processing_time.value,
            fee: form.fee.value,
            validity: form.validity.value,
            application_method: form.application_method.value,
        };

        // console.log(visas);
        // console.log(editingVisa._id);

        fetch(`http://localhost:5001/visa/${editingVisa._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedVisa)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated!', 'Visa has been updated.', 'success');
                    setEditingVisa(null);
                    fetch(`http://localhost:5001/my-visas?added_by=${user.email}`)
                        .then(res => res.json())
                        .then(data => setVisas(data));
                }
            });
    };

    return (
        <div className='pt-20 p-6 mx-auto flex flex-col'>
            <h2 className='text-center text-2xl font-bold py-3'>My added Visas</h2>
            <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {visas.map(visa => (
                    <div key={visa._id} className="bg-base-200 rounded-lg shadow p-4 space-y-2">
                        <img src={visa.country_image} alt={visa.country_name} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold">{visa.country_name}</h2>
                        <p><strong>Type:</strong> {visa.visa_type}</p>
                        <p><strong>Processing:</strong> {visa.processing_time}</p>
                        <p><strong>Fee:</strong> ${visa.fee}</p>
                        <p><strong>Validity:</strong> {visa.validity}</p>
                        <p><strong>Method:</strong> {visa.application_method}</p>
                        <div className="flex gap-2 mt-3">
                            <button onClick={() => setEditingVisa(visa)} className="btn btn-outline btn-sm">Update</button>
                            <button onClick={() => handleDelete(visa._id)} className="btn btn-error btn-sm text-white">Delete</button>
                        </div>
                    </div>
                ))}

                {/* Update Modal */}
                {editingVisa && (
                    <div
                        className="fixed inset-0 flex justify-center items-center z-50"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                        }}
                    >
                        <form
                            onSubmit={handleUpdate}
                            className="bg-white p-6 rounded-xl space-y-4 w-full max-w-md shadow-xl border"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-center">Update Visa</h3>

                            <div>
                                <label className="label font-medium">Country Name</label>
                                <input
                                    type="text"
                                    name="country_name"
                                    defaultValue={editingVisa.country_name}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Country Image URL</label>
                                <input
                                    type="text"
                                    name="photo"
                                    defaultValue={editingVisa.country_image}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Visa Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    defaultValue={editingVisa.visa_type}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Processing Time</label>
                                <input
                                    type="text"
                                    name="processing_time"
                                    defaultValue={editingVisa.processing_time}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Fee (USD)</label>
                                <input
                                    type="number"
                                    name="fee"
                                    defaultValue={editingVisa.fee}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Validity</label>
                                <input
                                    type="text"
                                    name="validity"
                                    defaultValue={editingVisa.validity}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label font-medium">Application Method</label>
                                <input
                                    type="text"
                                    name="application_method"
                                    defaultValue={editingVisa.application_method}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setEditingVisa(null)}
                                    className="btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyAddedVisas;
