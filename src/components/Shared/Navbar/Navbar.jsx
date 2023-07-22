import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import ActiveLink from "../../utility/ActiveLink/ActiveLink";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () => {
     logOut()
       .then((result) => {})
       .catch((error) => console.log(error));
   };
 
  return (
    <nav className="w-full bg-white shadow ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="navbar-start ml-0">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="">
              <ActiveLink to="/about">Colleges</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/contact">Admission</ActiveLink>
            </li>
            <li>
              <>
                {/* component */}
                <div className="relative text-gray-600">
                  <input
                    type="search"
                    name="serch"
                    placeholder="Search"
                    className="bg-slate-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  >
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56.966 56.966"
                      style={{ enableBackground: "new 0 0 56.966 56.966" }}
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </>
            </li>
          </ul>
        </div>

        <div
          className={` pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {user?.email ? (
              <>
                <li>
                  <ActiveLink className="mr-3" to="/dashbord/">
                    My College
                  </ActiveLink>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
                <Link
                  to="/user-profile"
                  className="hover-text h-10 w-10 ml-4 cursor-pointer"
                >
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                  />
                  <span className="tooltip-text" id="left">
                    {user?.displayName}
                  </span>
                </Link>
              </>
            ) : (
              <ActiveLink to="/login">LogIn</ActiveLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
