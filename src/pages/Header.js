import React, { useEffect } from "react";
import Dropdown from "../components/Dropdown";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../constants/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const dropdownItems = [
    {
      label: user?.displayName,
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 z-10 flex justify-between w-full">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4">
          <img className="w-20" src={user?.photoURL} alt="user-icon" />
          <Dropdown items={dropdownItems} buttonLabel="Settings" />
        </div>
      )}
    </div>
  );
};

export default Header;
