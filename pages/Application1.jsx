import TextInput from "@/src/components/textInput";
import { Button } from "@material-tailwind/react";
import Buttons from "@/src/components/buttons";
import React from "react";
import Link from "next/link";

function Application1({ handleNext }) {
  const handleSubmit = () => {
    handleNext();
  };

  return (
    <div>
      <div className="text-xl flex justify-center">Step-2</div>
      <div className="py-2 text-3xl flex justify-evenly pt-8">
        Personal Details
      </div>
      <div className="flex flex-row justify-evenly text-slate-700 pt-8">
        <div className="flex flex-col w-1/2">
          <div className="pl-9 flex flex-col justify-start">
            <div className="flex justify-center">
              <div className="">
                <TextInput label="Phone_NO." type="text" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">
                <TextInput label="Batch" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="pr-9 w-1/2 flex flex-col">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <div className="">
                <TextInput label="Github_Username" type="text" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">
                <TextInput label="Description" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application1;
