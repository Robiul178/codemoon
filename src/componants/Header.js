import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'
import { FiLogOut } from 'react-icons/fi';
import Tippy from '@tippyjs/react';
import Toggle from './Toggle';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div>
                {/* <div className="header-div">
                    <div className=" navbar text-white">
                        <div className="navbar-start h-14">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">

                                    <div className="drawer">
                                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                        <div className="drawer-content">

                                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button"> X</label>
                                        </div>
                                        <div className="drawer-side">
                                            <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                                                <li><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></li>
                                                <li><Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">COURSES</Link></li>
                                                <li><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></li>
                                                <li><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></li>

                                            </ul>
                                        </div>
                                    </div>


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
                            </ul>
                        </div>
                        <div className="navbar-end h-14 ">
                            <div className='user-info'>
                                {
                                    user?.uid ?
                                        <div className="avatar">
                                            <div className="w-8 rounded">
                                                <Tippy content={user.displayName}>
                                                    <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                                </Tippy>
                                            </div>
                                            <button onClick={logOut} className="btn ml-2 btn-outline"><FiLogOut /></button>
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
                </div> */}
            </div>

            {/* 2nd */}

            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        <li><Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">COURSES</Link></li>
                                    </a>
                                    {/* <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">
                            <div>
                                <h1>CODECADEMY</h1>
                                <span className='text-div'>ONLINE EDUCATION & LEARNING</span>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">COURSES</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></a></li>
                        </ul>
                        <div>
                            <Toggle></Toggle>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className='user-info'>
                            {
                                user?.uid ?
                                    <div className="avatar">
                                        <div className="w-8 rounded">
                                            <Tippy content={user.displayName}>
                                                <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                            </Tippy>
                                        </div>
                                        <button onClick={logOut} className="btn ml-2 btn-outline"><FiLogOut /></button>
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
        </div>
    );
};

export default Header;