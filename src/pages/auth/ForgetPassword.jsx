import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMailLine } from "react-icons/ri";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Recover password
        </h1>
      </div>
      <form className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type="email"
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="E-mail"
          ></input>
        </div>
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 text-gray-500 -translate-y-1/2" />
          <input
            type="email"
            className=" w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Confirm E-mail"
          ></input>
        </div>
        <div>
          <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all">
            Recover Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
