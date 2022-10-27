import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'
import Toogle from './Toogle';
import { FiLogOut } from 'react-icons/fi';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="header-div">
            <div className=" navbar text-white">
                <div className="navbar-start h-14">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <div>
                            <h1>CODECADEMY</h1>
                            <span className='text-div'>ONLINE EDUCATION & LEARNING</span>
                        </div>
                    </Link>
                    <div>
                        <Toogle></Toogle>
                    </div>
                </div>
                <div className="navbar-center  lg:flex h-14 ">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></li>
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">COURSES</Link></li>
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></li>
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></li>
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/pdf/:id">PDF</Link></li>
                    </ul>
                </div>
                <div className="navbar-end h-14 ">
                    <div className='user-info'>
                        {
                            user?.uid ?

                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                    <button onClick={logOut} className="btn ml-2 btn-outline"><FiLogOut /></button>
                                </div>

                                // <div className="avatar placeholder">
                                //     <img onMouseEnter={handleUserName} src={user.photoURL} alt="" />
                                //     <button onClick={logOut} className="btn  btn-outline">Log Out</button>
                                // </div>

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
    );
};

export default Header;