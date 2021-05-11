import React from "react";
import Footer from "../components/Footer";
import Interested from "../components/Interested";
import MainPic from "../components/MainPic";
import MidElements from "../components/MidElements";

function Profile() {
  return (
    <div>
      <header className="flex flex-col items-center mt-6">
        <p className="font-bold text-4xl">Notes</p>
        <p className="font-semibold">Personal messages to you.</p>
      </header>
      <MainPic />
      <Interested />
      <MidElements />
      <Footer />
    </div>
  );
}

export default Profile;
