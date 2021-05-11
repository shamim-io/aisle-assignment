import axios from "../axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function EnterOtp() {
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const submitOtp = async () => {
    if (otp == "1234" || otp == "") {
      try {
        let response = await axios.post("/verify_otp", {
          number: "+919876543212",
          otp: "1234",
        });
        let ans = await response;

        if (ans.status == 200) {
          history.push("/profile");
        }
      } catch (error) {
        alert("Error is ", error);
      }
    } else {
      alert("Enter 1234 or leave it blank.");
    }
  };
  return (
    <div className="flex flex-col mt-16 ml-8 md:mx-96 ">
      <p className="text-lg font-semibold">+91 9876543212</p>
      <p className="text-3xl font-bold">Enter The</p>
      <p className="text-3xl font-bold">OTP</p>
      <div className="flex mt-4">
        <input
          className=" p-2 w-28 mr-4 rounded border border-gray-400 focus:border-blue-500"
          type="number"
          placeholder="1234"
          onChange={(e) => setOtp(e.target.value)}
          onClick={() => alert("Entering 1234 by default. Click on continue")}
        />
      </div>

      <p
        onClick={submitOtp}
        className="cursor-pointer w-32 -ml-1 mt-4 items-center pt-2 pb-2 pl-7 pr-7 m-2 rounded-3xl bg-yellow-400 font-semibold"
      >
        Continue
      </p>
    </div>
  );
}

export default EnterOtp;
