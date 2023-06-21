import React from "react";
import Link from "next/link";
import Navbar from "@/src/components/navbar";
import ApplyNow from "./ApplyNow";

function about() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* IMG AND WHO WE ARE */}
      <div className="flex w-screen bg-white pt-9">
        <div className="w-1/2 flex justify-end items-center">
          <div className="px-12">
            <img
              src="data:image/png;base64,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"
              alt="img"
            />
          </div>
        </div>
        <div className="w-1/2 h-full justify-end items-end">
          <div className="w-8/12 text-4xl pt-9 flex justify-center items-center text-slate-700">
            <b>Who we are?</b>
          </div>
          <div className="w-8/12 text-2xl px-4 pt-9 justify-center items-center text-slate-600">
            We are a group of students and professionals and hobbyists who are
            passionate about coding. Our club welcomes members from all walks of
            life, regardless of their coding experience or background. Whether
            you are a beginner taking your first steps in coding or an
            experienced programmer looking to expand your skills, we have a
            place for you in our club, you can join us and learn. <br />
          </div>
        </div>
      </div>
      {/* what we do */}
      <div className="flex w-screen bg-white pb-11">
        <div className=" w-1/2 h-full bg-white justify-start items-center">
          <div className=" text-slate-700">
            <div className="w-8/12 text-4xl pt-20 flex justify-end items-center">
              <b>What we do?</b>
            </div>
          </div>
          <div className="flex text-2xl pt-9 justify-end items-center text-slate-600">
            <div className="w-8/12 flex justify-start">
              Our club hosts meetups, workshops, hackathons, and coding
              challenges to promote learning, collaboration, and skill
              development. We cover areas like web and mobile app development,
              machine learning, and AI. Industry experts are invited as guest
              speakers to share valuable insights and experiences. Our club
              emphasizes a supportive and inclusive environment, encouraging
              members to express themselves, ask questions, and receive
              constructive feedback to enhance their coding skills.
            </div>
          </div>
        </div>
        <div className="w-1/2 pt-11 bg-white flex justify-start items-center">
          <div className="w-8/12 flex item-center ">
            <img
              src="https://st2.depositphotos.com/1051392/5967/i/950/depositphotos_59675283-stock-photo-3d-man-what-we-do.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default about;
