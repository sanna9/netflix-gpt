import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/CA-en-20241125-TRIFECTA-perspective_ddb53a3c-a0df-4db6-85f4-b00321e76f8a_large.jpg"></img>
      </div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <form className="absolute w-1/4 p-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-6 text-white rounded">
        <h1 className="font-bold text-3xl pb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-transparent border rounded"
          />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-transparent border rounded"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full bg-transparent border rounded"
        />
        <button className="p-2 bg-red-700 w-full mt-4 rounded">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
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
