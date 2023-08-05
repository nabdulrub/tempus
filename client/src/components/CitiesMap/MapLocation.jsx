import React from "react";

const MapLocation = ({ city, flag }) => {
  return (
    <div className="rounded-3xl relative bg-background-color w-[35px] h-[35px] shadow-black cursor-pointer transition-all hover:scale-110">
      <img className="w-full" src={flag} alt="" />
      <h2 className="absolute text-center">{city}</h2>
    </div>
  );
};

export default MapLocation;
