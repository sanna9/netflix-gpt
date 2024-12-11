import React, { useRef, useState } from "react";
import Header from "./Header";
import Button from "../components/Button";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGIN_BG, USER_IMG } from "../constants/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButton = () => {
    const errorMessage = validateForm(
      email?.current?.value || "",
      password?.current?.value || ""
    );
    setEmailError(errorMessage.email);
    setPasswordError(errorMessage.password);

    if (errorMessage.email || errorMessage.password) {
      return;
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_IMG,
          })
            .then(() => {
              // Refresh the current user data so can reflect in state in meantime
              return user.reload();
            })

            .catch((error) => {
              console.log("Error updating profile:", error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setEmailError(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setEmailError("Invalid Credentials", errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />

      <div className="absolute">
        <img src={LOGIN_BG} alt="logo" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/4 p-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-6 text-white rounded"
      >
        <h1 className="font-bold text-3xl pb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full bg-transparent border rounded"
            />
          </>
        ) : (
          ""
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-transparent border rounded"
        />
        <p className="text-red-500">{emailError}</p>
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full bg-transparent border rounded"
        />
        <p className="text-red-500">{passwordError}</p>
        <Button
          buttonClassName="p-2 bg-red-700 w-full mt-4 rounded"
          onClick={handleButton}
          label={isSignIn ? "Sign In" : "Sign Up"}
          labelClassName="justify-center"
        />
        <p className="pt-2" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already have an Account? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
