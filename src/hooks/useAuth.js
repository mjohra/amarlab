import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(false);
  const admin = ["mou@gmail.com", "1234"];
  const navigate = useNavigate();

  const adminLogin = (email, pass, redirect) => {
    if (email === admin[0] && pass === admin[1]) {
      localStorage.setItem("login", true);
      setUser(true);
      navigate(redirect);
      // console.log(redirect);
    } else {
      window.alert("Please use admin email and password;   Email:  mou@gmail.com  Password: 1234");
    }
  };

  const logOut = (email, password) => {
    localStorage.removeItem("login");
    setUser(false);
  };
  return {
    user,
    setUser,
    adminLogin,
    logOut,
  };
};

export default useAuth;
