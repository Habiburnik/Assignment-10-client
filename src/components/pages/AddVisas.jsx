
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';

const AddVisa = () => {
    const { user } = useContext(AuthContext);

    const handleAddVisa = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const requiredDocuments = formData.getAll('required_documents');
        const newVisa = {
            country_image: formData.get('country_image'),
            country_name: formData.get('country_name'),
            visa_type: formData.get('visa_type'),
            processing_time: formData.get('processing_time'),
            required_documents: requiredDocuments,
            description: formData.get('description'),
            age_restriction: Number(formData.get('age_restriction')),
            fee: Number(formData.get('fee')),
            validity: formData.get('validity'),
            application_method: formData.get('application_method'),
            createdAt: new Date().toISOString(),
            added_by : user.email
        };

        console.log(newVisa);

        fetch('https://assignment-10-server-phi-red.vercel.app/visa', {  
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Visa added successfully!',
                        icon: 'success',
                        draggable: true,
                    });
                    form.reset();
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error adding visa',
                    text: err.message,
                    icon: 'error',
                });
            });
    };

    return (
        <div className='pt-25 max-w-4xl mx-auto px-5 '>
            <h1 className='text-2xl font-bold mb-6 text-center'>Add Visa</h1>
            <form onSubmit={handleAddVisa} className='space-y-6'>

                {/* 2-per-row grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Country Image URL</label>
                        <input type='text' name='country_image' className='input w-full' placeholder='Enter country image URL' required />
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Country Name</label>
                        <input type='text' name='country_name' className='input w-full' placeholder='Enter country name' required />
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Visa Type</label>
                        <select name='visa_type' className='input w-full' required>
                            <option value=''>Select visa type</option>
                            <option value='Tourist visa'>Tourist visa</option>
                            <option value='Student visa'>Student visa</option>
                            <option value='Official visa'>Official visa</option>
                        </select>
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Processing Time</label>
                        <input type='text' name='processing_time' className='input w-full' placeholder='e.g. 7-10 business days' required />
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Age Restriction</label>
                        <input type='number' name='age_restriction' className='input w-full' placeholder='Minimum age' required />
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Fee</label>
                        <input type='number' name='fee' className='input w-full' placeholder='Fee in USD' required />
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Validity</label>
                        <input type='text' name='validity' className='input w-full' placeholder='e.g. 6 months' required />
                    </fieldset>

                    <fieldset className='border p-4 rounded'>
                        <label className='block mb-1 font-semibold'>Application Method</label>
                        <input type='text' name='application_method' className='input w-full' placeholder='How to apply' required />
                    </fieldset>
                </div>

                {/* Full width: Required Documents */}
                <fieldset className='border p-4 rounded'>
                    <label className='block mb-1 font-semibold'>Required Documents</label>
                    <div className='flex flex-col sm:flex-row sm:gap-6'>
                        <label><input type='checkbox' name='required_documents' value='Valid passport' /> Valid passport</label>
                        <label><input type='checkbox' name='required_documents' value='Visa application form' /> Visa application form</label>
                        <label><input type='checkbox' name='required_documents' value='Recent passport-sized photograph' /> Recent passport-sized photograph</label>
                    </div>
                </fieldset>

                {/* Full width: Description */}
                <fieldset className='border p-4 rounded'>
                    <label className='block mb-1 font-semibold'>Description</label>
                    <textarea name='description' className='input w-full' rows={4} placeholder='Brief description about this visa' required></textarea>
                </fieldset>

                <button type='submit' className='btn w-full bg-blue-600 text-white hover:bg-blue-700'>
                    Add Visa
                </button>
            </form>

        </div>
    );
};

export default AddVisa;
