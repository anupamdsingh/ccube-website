import React from "react";
import Image from "next/image";

const MemberCard = ({ Name, link }) => {
  return (
    <div className=" bg-slate-300 sahdow-lg overflow-hidden flex flex-col md:flex-row justify-center items-center  px- pb- font-bold ">
      <div className=" ">
        <img className=" h-full w-full" src={link} alt="photo" />
        <div className="text-whi text-xl">{Name}</div>
      </div>
    </div>
  );
};

export default MemberCard;
