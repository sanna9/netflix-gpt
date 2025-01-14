import React, { useCallback, useEffect, useMemo } from "react";
import Dropdown from "../components/Dropdown";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, SUPPORTED_LANG } from "../constants/constants";
import Button from "../components/Button";
import { toggleGptSearchView } from "../store/gptSlice";
import Select from "../components/Select";
import { changeLanguage } from "../store/configSlice";

import { useTranslation } from "../hooks/useTranslation";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang) || "en";
  const t = useTranslation(langKey, showGptSearch);


  const handleSignOut = useCallback(async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  }, [navigate]);

  const dropdownItems = useMemo(() => {
    return [
      { label: user?.displayName },
      {
        label: t("logout"),
        onClick: handleSignOut,
      },
    ];
  }, [user, langKey, showGptSearch, navigate]);

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

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearch = useCallback(() => {
    dispatch(toggleGptSearchView());
  }, [dispatch]);

  const handleLanguageChange = useCallback(
    (lang) => {
      dispatch(changeLanguage(lang || "en"));
    },
    [dispatch]
  );
  if (!user) return null;

  return (
    <div className="absolute px-8 py-2 z-10 flex justify-between w-full">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <Select
              options={SUPPORTED_LANG}
              onChange={handleLanguageChange}
              placeholder="Select Language"
              className="m-2 bg-white  p-2 rounded"
            />
          )}
          <Button
            label={showGptSearch ? t("home") : t("gptSearch")}
            buttonClassName="bg-red-700 text-white"
            onClick={handleGptSearch}
          />

          <Dropdown
            items={dropdownItems}
            trigger={
              <img
                className="w-10 rounded-3xl cursor-pointer"
                src={user?.photoURL}
                alt="user-icon"
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default Header;
