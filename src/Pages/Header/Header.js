import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Header.css'

const Header = () => {
  const { user, setUser, logOut } = useAuth();
  const loggedIn = localStorage.getItem("login");

  useEffect(() => {
    const loggedIn = localStorage.getItem("login");
    loggedIn && setUser(loggedIn);
  }, [user, setUser]);

  return (
    <div className='nav-details'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? "ActiveNavItem" : " navItem")}
      >
        Home
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? "ActiveNavItem" : " navItem")}
      >
        Contact
      </NavLink>
      <NavLink
        to='/blogs'
        className={({ isActive }) => (isActive ? "ActiveNavItem" : " navItem")}
      >
        Blogs
      </NavLink>
      {loggedIn ? (
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive ? "ActiveNavItem" : " navItem"
          }
          onClick={logOut}
        >
          Logout
        </NavLink>
      ) : (
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive ? "ActiveNavItem" : " navItem"
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Header;
