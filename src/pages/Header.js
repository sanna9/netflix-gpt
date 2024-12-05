import React from "react";
import Dropdown from "../components/Dropdown";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dropdownItems = [
    {
      label: "Dashboard",
    },
    {
      label: "Sign Out",
      onClick: async () => {
        try {
          await signOut(auth);
          navigate("/");
        } catch (error) {
          navigate("/error");
        }
      },
    },
  ];

  return (
    <div className="absolute px-8 py-2 z-10 flex justify-between w-full">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center space-x-4">
          <img className="w-20" src={user?.photoURL} alt="user-icon" />
          <Dropdown items={dropdownItems} />
        </div>
      )}
    </div>
  );
};

export default Header;
