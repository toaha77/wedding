import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
 
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/ "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-pink-400  font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
       
      
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-pink-500  font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-pink-500  font-semibold" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-pink-500  font-semibold" : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-pink-500  font-semibold" : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div>
        <div className="navbar bg-gray-300 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost mr-6 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center justify-center gap-2">
               
              <h1 className="text-xl lg:text-3xl hover:text-pink-500 font-bold">
                Wedding-Management 
              </h1>
            </div>
          </div>
          <div className="navbar-center   hidden lg:flex">
            <ul className="flex gap-4">{navLinks}</ul>
          </div>

          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
