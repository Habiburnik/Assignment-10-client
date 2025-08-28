import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';

const Register = () => {
    const { createNewUser, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Clear previous error

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        if (!passwordRegex.test(password)) {
            return setError("Password must be at least 6 characters, include uppercase, lowercase and a special character.");
        }

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => navigate("/"))
                    .catch(err => setError("Profile update failed: " + err.message));
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" required />

                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />

                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    <button className="btn btn-neutral mt-4">Register</button>

                    <label className='py-2 text-sm'>
                        Already have an account? <Link to='/auth/login' className='text-red-400 font-bold'>Login</Link>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Register;
