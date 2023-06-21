import React, { useState } from "react";

import MemberCard from "@/src/components/memberCard";
import Navbar from "@/src/components/navbar";

const members_list = [
  {
    name: "Anupam Singh",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
  {
    name: "Gaurav Sharma",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
  {
    name: "Himanshu Lath",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
  {
    name: "Prashant Gehlot",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
  {
    name: "Prashant",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
  {
    name: "Gopi",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
  {
    name: "Gopi",
    link: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
  },
];

const member = () => {
  const [members, setMembers] = useState(members_list);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="w-screen bg- mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h2 class="text-2xl font-bold text-indigo-500 ">
            We have the best mind in the market
          </h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700 pt-5">
            Check our awesome team members
          </h1>

          <div className=" flex justify-center  items-center py-10 px-10 grid gap-7 grid-cols-3 border-spacing-x-1.5">
            {members.map((member) => {
              console.log(member.name);
              return <MemberCard Name={member.name} link={member.link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default member;
