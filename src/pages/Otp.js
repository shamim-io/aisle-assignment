import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "../axios";

function Otp() {
  const [number, setNumber] = useState("");
  const history = useHistory();
  const submitNumber = async () => {
    if (number == "9876543212" || number == "") {
      try {
        let response = await axios.post("/verify_otp", {
          number: "+919876543212",
        });
        let user = await response;
        console.log(user.status);
        if (user.status == 200) {
          history.push("/enterOtp");
        }
      } catch (error) {
        console.log(error);
        alert("Error is ", error);
      }
    } else {
      alert("Enter +919876543212, else leave blank");
    }
  };

  return (
    <div className="flex flex-col mt-16 ml-8 md:mx-96 ">
      <p className="text-lg font-semibold">Get OTP</p>
      <p className="text-3xl font-bold">Enter Your</p>
      <p className="text-3xl font-bold">Phone Number</p>
      <div className="flex mt-4">
        <input
          className=" p-2 w-16 mr-4 rounded border border-gray-400 focus:border-blue-500"
          type="number"
          placeholder="+91"
        />
        <input
          className=" p-2 border rounded border-gray-400 focus:border-blue-500"
          type="number"
          placeholder="9876543212"
          onChange={(e) => setNumber(e.target.value)}
          onClick={() =>
            alert("Entering +919876543212 by default. Click on continue")
          }
        />
      </div>

      <p
        onClick={submitNumber}
        className=" w-32 cursor-pointer -ml-1 mt-4 items-center pt-2 pb-2 pl-7 pr-7 m-2 rounded-3xl bg-yellow-400 font-semibold"
      >
        Continue
      </p>
    </div>
  );
}

export default Otp;
