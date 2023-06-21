import React, { useState, useEffect } from "react";
import Buttons from "./buttons";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    let greet;

    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

    setGreeting(`${greet}`);
  }, []);

  return (
    <label className="text-center text-4xl lblGreetings">
      {greeting}
      <i>
        <div>
          <Buttons />
        </div>
        <div className="pt-2">
          {" "}
          Welcome to{" "}
          <b>
            C <sup>cube</sup>
          </b>
        </div>
      </i>
    </label>
  );
}

export default Greeting;
