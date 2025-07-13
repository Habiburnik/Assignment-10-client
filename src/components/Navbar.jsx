import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const subMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/lessons'>Start-learning</Link></li>
        <li><Link to='/tutorials'>Tutorials</Link></li>
        <li><Link to='/aboutUs'>About-us</Link></li>
        {
            user && <li><Link to='/Profile'>My Profile</Link></li>
        }
    </>


    return (
        <div className="navbar bg-[#001c5a] text-white shadow-sm flex justify-between text-3xl lg:text-2xl">
            <div className="navbar-start max-w-[150px]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {subMenu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost hover:bg-[#001c5a] text-2xl hover:text-white">Lingo Bingo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg menu-horizontal px-1">
                    {subMenu}
                </ul>
            </div>
            <div className='flex gap-5 h-8'>
                <img
                    className="hidden sm:block rounded-3xl w-8"
                    src={user?.photoURL || userIcon}
                    alt=""
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                />
                {

                    user && user?.email ?
                        <button onClick={logOut} className='btn h-8 border-black bg-[#f1efef] '>Log Out</button > :
                        <Link to='/auth/login' className='btn h-8' >Login</Link >
                }
                {

                }

            </div>
        </div>
    );
};


// </div>

export default Navbar;