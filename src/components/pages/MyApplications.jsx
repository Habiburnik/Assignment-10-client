import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../../provider/AuthContext';

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApplications, setFilteredApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-server-phi-red.vercel.app/applications?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setApplications(data);
          setFilteredApplications(data);
        });
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
        fetch(`https://assignment-10-server-phi-red.vercel.app/applications/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your application has been cancelled.', 'success');
              setApplications(prev => {
                const updated = prev.filter(app => app._id !== id);
                setFilteredApplications(updated); // keep filtered in sync
                return updated;
              });
            }
          });
      }
    });
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredApplications(applications);
      return;
    }
    const filtered = applications.filter(app =>
      app.visaCountry.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  return (
    <div className="max-w-7xl flex flex-col mx-auto p-6 pt-20">
      <h2 className="text-3xl text-center font-bold mb-6">My Visa Applications</h2>

      {/* Search Section */}
      <div className="flex max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="input input-bordered flex-grow mr-2"
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications.length === 0 ? (
          <p className="text-center col-span-full">No applications found.</p>
        ) : (
          filteredApplications.map(app => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default MyApplications;
