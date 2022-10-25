import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleUserName = () => {
        alert('clicked')
    }

    return (
        <div>
            <div>
                <div className="navbar text-white">
                    <div className="navbar-start h-14 bg-blue-800">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></li>
                                <li><Link className="btn btn-ghost normal-case text-xl" to="/courses">COURSES</Link></li>
                                <li><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></li>
                                <li><Link className="btn btn-ghost normal-case text-xl" to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl"><div>
                            <h1>CODECADEMY</h1>
                            <span className='text-div'>ONLINE EDUCATION & LEARNING</span>
                        </div></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex h-14 bg-blue-800">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></li>
                            <li><Link className="btn btn-ghost normal-case text-xl" to="/courses">COURSES</Link></li>
                            <li><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></li>
                            <li><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end h-14 bg-blue-800">
                        <div className='user-info'>
                            {
                                user?.uid ?
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                            <img onMouseEnter={handleUserName} src={user.photoURL} alt="" />
                                        </div>
                                        <div>
                                            <button onClick={logOut} className="btn  btn-outline"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;