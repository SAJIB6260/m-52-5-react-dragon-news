import { NavLink } from "react-router-dom";
import userDefaultImage from "../../../assets/user.png"
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    console.log(user)

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li className="mr-5 text-lg text-[#706F6F] "><NavLink to="/">Home</NavLink></li>
        <li className="mr-5 text-lg text-[#706F6F] "><NavLink to="/login">Login</NavLink></li>
        <li className="mr-5 text-lg text-[#706F6F] "><NavLink to="/register">Register</NavLink></li>
        <li className="mr-5 text-lg text-[#706F6F] "><NavLink to="/contact-us">Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <label tabIndex={0} className="avatar mr-2">
                    <div className="w-10 lg:w-12 rounded-full">
                        <img src={userDefaultImage} />
                    </div>
                </label>
                :
                ""
                }

                {
                    user ? 
                    <button onClick={handleSignOut} className="text-xl bg-[#403F3F] text-white font-medium lg:font-semibold px-4 lg:px-8 py-1 lg:py-[10px]">Sign Out</button>
                    :
                    ""
                }
            </div>
        </div>
    );
};

export default Navbar;