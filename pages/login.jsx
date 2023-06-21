import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import Navbar from "@/src/components/navbar";
import Greeting from "@/src/components/greeting";

function Login() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="h-screen w-screen flex justify-center items-center bg-indigo-50">
        <div className="flex bg-white backdrop-blur-md w-3/5 h-3/4 rounded">
          <div className="flex w-full">
            <div className="w-7/12 flex bg-indigo-500 rounded-l text-white items-center justify-center">
              {/* <Image src={login} className = "rounded" alt="login" /> */}
              <Greeting />
            </div>
            <div className="flex flex-col w-1/2 bg-white justify-center items-center rounded-r">
              <div>
                <div className="mb-8 flex flex-col items-center pt-7">
                  <Image src={logo} className="rounded flex w-1/4" alt="logo" />
                  <span className="text-gray-500">Enter Login Details</span>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="mb-4 w-3/5 text-lg">
                  <input
                    label="Username"
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-1 w-3/5 text-lg">
                  <input
                    label="Password"
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block w-full p-2.5"
                    placeholder="********"
                    required
                  />
                  <i className="fas fa-heart" />
                </div>
                <div className="mb-3 w-3/5 flex flex-wrap justify-end">
                  <a href="#" className="text-xs font-semibold text-indigo-500">
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center justify-center mt-8 w-3/5 text-lg text-black">
                  <button
                    type="button"
                    className="text-indigo-500 w-full border border-indigo-500 bg-white hover:bg-indigo-500 hover:text-white focus:ring-4 font-medium rounded-md text-sm py-2.5 mb-2 "
                  >
                    Login
                  </button>
                </div>
                {/* <div className="text-center">
           <span className="text-xs text-gray-700 font-semibold">New Member
           ?</span>
           <a href="#" className="text-xs font-semibold text-indigo-500 ml-1">Sign up</a>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
