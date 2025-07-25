import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)




    const subMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/visas'>All visas</Link></li>
        <li><Link to='/addVisa'>Add Visa</Link></li>
        <li><Link to='/myAddedVisa'>My Added Visa</Link></li>
        <li><Link to='/myApplications'>My Visa applications</Link></li>
    </>


    return (
        <div className="navbar bg-base-200 text-black shadow-sm flex justify-between text-3xl lg:text-2xl">
            <div className="navbar-start max-w-[200px]">
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
                <Link to='/' className="btn btn-ghost hover:bg-base-400 text-2xl">
                    <span className='text-lg'> Visa Vista </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg menu-horizontal px-1">
                    {subMenu}
                </ul>
            </div>
            <div className='flex h-'>
                <img
                    className="hidden sm:block rounded-3xl h-8 mt-2 w-8"
                    src={user?.photoURL || userIcon}
                    alt=""
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                />
                {
                    user && user?.email ? (
                        <>
                            {/* Small screens: just Logout button */}
                            <div className="flex md:hidden">
                                <button onClick={logOut} className="btn btn-sm ml-3">
                                    Logout <FiLogOut />
                                </button>
                            </div>

                            {/* Medium+ screens: dropdown with username and logout */}
                            <div className="hidden md:flex">
                                <ul className="menu menu-horizontal">
                                    <li>
                                        <details>
                                            <summary>{user.displayName}</summary>
                                            <ul className="bg-white text-red-500 font-bold rounded-t-none">
                                                <li>
                                                    <button onClick={logOut}>Logout</button>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <Link to="/auth/login" className="btn h-8 mt-1.5 ml-3">
                            <FiLogIn /> Login
                        </Link>
                    )
                }


            </div>
        </div>
    );
};


// </div>

export default Navbar;