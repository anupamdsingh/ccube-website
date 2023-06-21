import { Button } from "@material-tailwind/react";
import React from "react";

const Buttons = ({ type, Name }) => {
  if (type == "primary") {
    return (
      <div className="flex items-center justify-center text-lg">
        <Button className="text-indigo-500 w-full border border-indigo-500 bg-white hover:bg-indigo-500 hover:text-white focus:ring-4 font-medium rounded-md text-sm py-2.5 mb-2">
          {Name}
        </Button>
      </div>
    );
  } else if (type == "secondary") {
    return (
      <div className="flex items-center justify-center text-lg">
        <Button className="text-white w-full border border-white bg-indigo-500 hover:bg-white hover:text-indigo-500 focus:ring-4 font-medium rounded-md text-sm py-2.5 mb-2 ">
          {Name}
        </Button>
      </div>
    );
  } else if (type == "default") {
    return (
      <div className="flex items-center justify-center text-lg">
        <Button className="text-gray-800 w-full border border-gray-800 bg-gray-200 hover:text-white font-medium rounded-md text-sm py-2.5 mb-2 ">
          {Name}
        </Button>
      </div>
    );
  }
};

export default Buttons;
