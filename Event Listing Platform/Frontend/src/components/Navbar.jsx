import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-[#ffff] text-[20px] font-semibold" : "text-black text-[20px]"
                    }
                >
                    Home
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/event"
                    className={({ isActive }) =>
                        isActive ? "text-[#ffff] text-[20px] font-semibold" : "text-black text-[20px]"
                    }
                >
                    Events
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-[#ffff] text-[20px] font-semibold" : "text-black text-[20px]"
                    }
                >
                    About Us
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? "text-[#ffff] text-[20px] font-semibold" : "text-black text-[20px]"
                    }
                >
                    Blogs
                </NavLink>

            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "text-[#ffff] text-[20px] font-semibold" : "text-black text-[20px]"
                    }
                >
                    Contact
                </NavLink>

            </li>
        </>
    );

    return (
        <div className="navbar bg-[#0D9C6D] shadow-sm mt-10 rounded-xl py-4 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="font-semibold font-serif text-[30px] text-[#ffff]">Nishat</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login">
                    <button className="btn btn-soft btn-primary text-[18px]">Login</button>
                </Link>
            </div>
        </div>
    )
}
