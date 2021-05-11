import React from "react";

function MainPic() {
  return (
    <div className=" relative flex  object-scale-down justify-center  md:mx-80">
      <img
        className=" rounded-lg h-96 max-h-full md:max-h-screen shadow-xl"
        src="https://images.newsonfloor.com/newsonfloorImage/40742/resize/40742.png"
        alt=""
      />
      <div className="absolute bottom-4 md:left-52 left-8 flex flex-col ">
        <p className="font-extrabold">Meena, 23</p>
        <p className="font-medium ">Tap to review 50+ notes</p>
      </div>
    </div>
  );
}

export default MainPic;
