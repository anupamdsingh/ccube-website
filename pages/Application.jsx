import TextInput from "@/src/components/textInput";
import Buttons from "@/src/components/buttons";
import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

function Application({ handleNext }) {
  const handleSubmit = () => {
    handleNext();
  };

  return (
    <div>
      <div className="text-xl flex justify-center">Step-1</div>
      <div className="py-2 text-3xl pt-8 flex justify-evenly">
        Student Application
      </div>
      <div className="flex flex-row justify-evenly text-slate-700 pt-8">
        <div className="flex flex-col w-1/2">
          <div className="pl-9 flex flex-col justify-start">
            <div className=" flex justify-center">
              <div className="">
                <TextInput label="Student ID" type="text" />
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="">
                <TextInput label="First Name" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="pr-9 w-1/2 flex flex-col">
          <div className="flex flex-col">
            <div className=" flex justify-center">
              <div className="">
                <TextInput label="Email" type="email" />
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="">
                <TextInput label="Last Name" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Application;
