import Greeting from "@/src/components/greeting";
import React from "react";
import Link from "next/link";
import home from "./Home";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div className="flex flex- items-center justify-center text-6xl w-screen h-screen bg-black">
      {/* <div> <Image className=" h-full w-full" src={Logo} alt="photo"/> </div> */}
      <div>
        <Link
          className="text-slate-500 inline-block no-underline hover:text-gray-700 font-medium text-2lg py-2 px-4 lg:-ml-2"
          href="/Home"
        >
          Work in progress
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
