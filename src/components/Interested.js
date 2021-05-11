import React from "react";

function Interested() {
  return (
    <div className="flex justify-center mt-4">
      <div className="ml-2">
        <p className="font-extrabold">Interested In You</p>
        <p className="font-normal text-gray-600">Premium members can</p>
        <p className="font-normal text-gray-600">
          view all their likes at once
        </p>
      </div>
      <div className="mt-4">
        <p className="pt-2 pb-2 pl-7 pr-7 m-2 rounded-3xl bg-yellow-400 font-semibold">
          Upgrade
        </p>
      </div>
    </div>
  );
}

export default Interested;
