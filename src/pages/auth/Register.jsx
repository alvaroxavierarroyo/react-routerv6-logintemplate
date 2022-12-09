import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Create your account
        </h1>
      </div>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type="text"
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Name"
          ></input>
        </div>
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type="text"
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type="email"
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="E-mail"
          ></input>
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Password"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 text-gray-500 -translate-y-1/2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 text-gray-500 -translate-y-1/2 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Confirm your password"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 text-gray-500 -translate-y-1/2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 text-gray-500 -translate-y-1/2 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button className="mt-2 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all">
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p>Already have an account?</p>{" "}
        <Link
          to="/"
          className="text-sky-700 font-medium hover:underline transition-all"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Register;
