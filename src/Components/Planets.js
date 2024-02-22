import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import usePlanetData from "../Utils/usePlanetData";
import PlanetCard from "./PlanetCard";
import PageHeading from "./PageHeading";
import Loading from "./Loading";

const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const data = usePlanetData(pageNumber);
  const planetData = data?.results;

  const handlePageUp = () => {
    pageNumber < 6 ? setPageNumber(pageNumber + 1) : setPageNumber(1);
  };
  const handlePageDown = () => {
    pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(6);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <PageHeading
        heading="Star Wars Planets Explorer"
        description="Discover the climates, terrains, and populations of iconic Star Wars planets through our compact and engaging Planet Cards."
      />
      <div className="flex justify-center pb-5 pt-6 gap-9 items-center sticky top-16 z-10 text-white">
        <button
          className="bg-yellow-400 border-2 border-black text-black p-2 rounded-full hover:bg-yellow-300 transition duration-300"
          onClick={handlePageDown}
        >
          <IoIosArrowBack size={25} />
        </button>
        <h1 className="text-3xl text-black font-bold">{pageNumber}</h1>
        <button
          className="bg-yellow-400 border-2 border-black text-black p-2 rounded-full hover:bg-yellow-300 transition duration-300"
          onClick={handlePageUp}
        >
          <IoIosArrowForward size={25} />
        </button>
      </div>
      <div className="p-8 pt-0 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 ">
        {planetData.map((curr, index) => (
          <PlanetCard key={index} data={curr} />
        ))}
      </div>
    </>
  );
};

export default Planets;
