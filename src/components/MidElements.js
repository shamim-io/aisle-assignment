import React from "react";

function MidElements() {
  return (
    <div className="relative flex justify-center mt-4  m-0 ">
      <img
        className="rounded-lg filter blur-sm mr-3 h-40 max-h-full md:max-h-screen shadow-xl"
        src="https://i.pinimg.com/originals/3b/ff/bd/3bffbd11a40e99fc595a8ef0fd07c992.jpg"
        alt=""
      />
      <p className="absolute bottom-1 left-10 md:mx-96 md:left-40 font-bold">
        Reena
      </p>
      <img
        className="rounded-lg ml-3 filter blur-sm h-40 max-h-full md:max-h-screen shadow-xl"
        src="https://i.pinimg.com/564x/6f/de/85/6fde85b86c86526af5e99ce85f57432e.jpg"
        alt=""
      />
      <p className="absolute bottom-1 left-48 md:mx-96 md:left-80 font-bold">
        Beena
      </p>
    </div>
  );
}

export default MidElements;
