import React from "react";
import { Link } from "react-router-dom";
import HERO_IMAGE from "../Assets/heroImage.png";

const Hero = () => {
  return (
    <section className="flex flex-col justify-around items-center gap-6 px-8 py-1 lg:flex-row">
      {/* Text Content */}
      <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left lg:w-1/2 xl:py-24">
        <p className="mb-4 font-bold text-slate-800 md:text-lg xl:text-xl">
          Embark on a Galactic Journey
        </p>
        <h1 className="mb-8 text-4xl font-bold text-black md:text-6xl ">
          Join the Star Wars Universe with Us
        </h1>
        <p className="mb-8 leading-relaxed text-gray-800 lg:w-4/5 xl:text-lg">
          Explore a vast collection of planets from a galaxy far, far away. Our
          online platform brings you the most exotic and diverse planets in the
          Star Wars universe.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2.5 md:flex-row lg:justify-start">
          <Link
            to="/explore"
            className=" inline-block rounded-lg bg-yellow-500 border-2 border-black px-6 py-3 text-center text-sm font-semibold text-black transition duration-100 hover:bg-white hover:text-black md:text-base"
          >
            Explore Now
          </Link>
          <button className="inline-block rounded-lg border-2 border-black bg-300 px-6 py-3 text-center text-sm font-semibold text-black transition duration-100 hover:bg-yellow-200 md:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="lg:h-auto lg:w-7/12 ">
        <img
          src={HERO_IMAGE}
          alt="Yoda"
          className="h-full w-full object-center object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
