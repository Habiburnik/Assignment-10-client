import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogins from './../SocialLogins';

const Login = () => {
    const { userLogin, setUser }= useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value

        userLogin(email, password)
        .then(result => {
            const user = result.user
            setUser(user);
            navigate(location?.state ? location.state : "/" )
        })
        .catch(error => {
            alert(error.code)
        })

    }
    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name = "password" className="input" placeholder="Password" />
                    <div><Link to='/auth/forget-password' className="link link-hover">Forgot password?</Link></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <label className='py-2'> Don't have an account? <Link to='/auth/register' className='text-red-400 font-bold'>Register</Link></label>
                </form>
            </div>
            <SocialLogins></SocialLogins>
        </div>
    );
};

export default Login;