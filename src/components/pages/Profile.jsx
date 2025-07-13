import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Profile = () => {

    const { user } = useContext(AuthContext)


    return (
        <div className='pt-25'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto pt-10">
                <div>
                    <h2 className='text-center my-2'>Welcome {user.displayName}</h2>
                </div>
                <div className="card-body">
                    <div className="fieldset space-y-2">
                        <img className='h-50 w-50 rounded-4xl mx-auto mb-5' src={user.photoURL}
                            alt=""
                            referrerPolicy="no-referrer"
                            crossOrigin="anonymous" ></img>
                        <div className='flex justify-between'>
                            <label className="label">Name : </label> <span>{user.displayName}</span>
                        </div>
                        <div className='flex justify-between'>
                            <label className="label">Email : </label> <span>{user.email}</span>
                        </div>
                        <Link to='/profile/updateProfile' className="btn btn-neutral mt-4">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;