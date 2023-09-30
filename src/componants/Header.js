import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'
import { FiLogOut } from 'react-icons/fi';
import Tippy from '@tippyjs/react';
import Toggle from './Toggle';


const Header = () => {

    // NAvbar End

    // <div className='user-info'>
    //                         {
    //                             user?.uid ?
    //                                 <div className="avatar">
    //                                     <div className="w-8 rounded">
    //                                         <Tippy content={user.displayName}>
    //                                             <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
    //                                         </Tippy>
    //                                     </div>
    //                                     <button onClick={logOut} className="btn ml-2 btn-outline"><FiLogOut /></button>
    //                                 </div>
    //                                 :
    //                                 <>
    //                                     <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
    //                                     <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
    //                                 </>
    //                         }
    // </div>







    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Itemmmm</a>
                                <a>okk</a>
                            </li>

                        </ul>
                    </div>
                    <a><Link className="btn btn-ghost normal-case text-xl" to="/">CODEMOON</Link></a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">COURSES</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link></a></li>

                        </>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;