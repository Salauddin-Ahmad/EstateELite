import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <>
      <ul className=" menu-horizontal px-1 py-6  ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 rounded-lg font-bold hover:bg-transparent "
                : "font-bold "
            }
          >
            <span className="p-2 text-lg font-bold">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 rounded-lg font-bold hover:bg-transparent "
                : "font-bold "
            }
          >
            <span className="p-2 text-lg font-bold ">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/allProperties"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 rounded-lg border[#58d4db77]  font-bold hover:bg-transparent "
                : "font-bold "
            }
          >
            <span className="p-2 text-lg font-bold">All Properties</span>
          </NavLink>
        </li>

        {!user && (
          <li>
            <NavLink to="/login">
              <span className="p-1  text-lg font-bold">Login</span>
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
  return (
    <div className="navbar bg-[rgba(206,215,236,0.35)]   backdrop-blur-[6px] fixed z-50
    top-0 left-0 w-full ">
      <div className="flex-1">
        <div className="dropdown relative">
          <div tabIndex={0} role="button" >
            <NavLink to="/" className="flex gap-2 items-center">
              <img
                className="w-full h-12 rounded-full border-4 border-gray-400"
                src="https://i.ibb.co/CVjTYfB/Screenshot-2024-06-01-123321.png"
                alt=""
              />
              {/* <span className="font-bold text-4xl">EstateElite</span> */}
              <span className="font-bold text-4xl text-gradient animate-gradient">EstateElite</span>


            </NavLink>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-50  shadow bg-base-100 rounded-box w-52 lg:hidden"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className="hidden lg:block ">{navLinks}</div>
  
        {user && (
          <div className="relative z-50">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar focus:outline-none"
              >
                <div title={user?.displayName} className="w-10 h-10 rounded-full border-2 border-transparent hover:border-primary transition-all duration-300">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="  dropdown-content  p-1 shadow-lg backdrop-blur-4xl  bg-[rgba(206,212,236,0.79)]  rounded-lg w-48 border border-gray-200"
              >
                <li>
                  <button
                    onClick={logOut}
                    className="w-full  py-1 text-base text-gray-700 hover:bg-[#dd1919]  transition-colors rounded-md hover:scale-95 ease-in-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default Navbar;
