import React from "react";
import loadingImage from "../Assets/loadingImage.gif";
import { LuLoader2 } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <img
        src={loadingImage}
        alt="Loading..."
        className=" h-[1/2] mt-28 md:mt-6"
      />
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="pb-4">
          <LuLoader2 className="animate-spin" size={28} />
        </div>
        <h1 className="text-2xl">LOADING</h1>
      </div>
    </div>
  );
};

export default Loading;
