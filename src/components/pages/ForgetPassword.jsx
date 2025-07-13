import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify'; // make sure it's installed
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const { passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        try {
            await passwordReset(email);
            toast.success('Reset link sent successfully');
            form.reset();
            navigate('/auth/login');
        } catch (err) {
            toast.error(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleReset} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" required />
                    <button className="btn btn-neutral mt-4">Send Code</button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
