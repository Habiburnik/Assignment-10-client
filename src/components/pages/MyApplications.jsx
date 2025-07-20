import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5001/applications?email=${user.email}`)
        .then(res => res.json())
        .then(data => setApplications(data));
    }
  }, [user?.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This application will be deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/applications/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your application has been cancelled.', 'success');
              setApplications(applications.filter(app => app._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl flex flex-col mx-auto p-6  pt-20">
      <h2 className="text-3xl text-center font-bold mb-6">My Visa Applications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map(app => (
          <div key={app._id} className="border rounded-lg shadow p-4 space-y-2 bg-white">
            <img src={app.countryImage} alt={app.visaCountry} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold">{app.visaCountry} - {app.visaTitle}</h3>
            <p><strong>Visa Type:</strong> {app.visaType}</p>
            <p><strong>Processing Time:</strong> {app.processingTime}</p>
            <p><strong>Fee:</strong> ${app.fee}</p>
            <p><strong>Validity:</strong> {app.validity}</p>
            <p><strong>Application Method:</strong> {app.applicationMethod}</p>
            <p><strong>Applied Date:</strong> {new Date(app.appliedDate).toLocaleDateString()}</p>
            <p><strong>Applicant:</strong> {app.firstName} {app.lastName}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <button
              onClick={() => handleCancel(app._id)}
              className="btn btn-error btn-sm mt-2 w-full"
            >
              Cancel Application
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
