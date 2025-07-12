import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const updatedData = {
      displayName: name,
      photoURL: photo,
    };

    try {
      await updateUserProfile(updatedData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="card bg-base-100 mx-auto mt-6 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input input-bordered w-full" placeholder="Name" />

          <label className="label mt-2">Photo URL</label>
          <input type="text" name="photo" className="input input-bordered w-full" placeholder="Photo URL" />

          <button type="submit" className="btn btn-neutral mt-4">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
