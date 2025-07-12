import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const { createNewUser, updateUserProfile, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const form = new FormData(e.target)
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name, photo, email, password})

        createNewUser(email, password) 
        .then(result => {
            const user = result.user;
            setUser(user)
            updateUserProfile({displayname : name, photourl : photo})
            .then(() =>{
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)})
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
        
    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                    <label className='py-2'> Already have an account? <Link to='/auth/login' className='text-red-400 font-bold'>Login</Link></label>
                </form>
            </div>
        </div>
    );
};

export default Register;