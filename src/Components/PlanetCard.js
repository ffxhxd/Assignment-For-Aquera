import React, { useEffect, useState } from "react";
import { FaSun, FaMountain, FaUsers } from "react-icons/fa";
import { TbPlanet } from "react-icons/tb";
import ResidentDetails from "./ResidentDetails";

const PlanetCard = (props) => {
  const { name, climate, terrain, population, diameter, residents } =
    props?.data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [residentDetails, setResidentDetails] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        const details = await Promise.all(
          residents.map(async (residentUrl) => {
            const response = await fetch(residentUrl);
            const data = await response.json();
            return data;
          })
        );

        setResidentDetails(details);
      } catch (error) {
        console.error("Error fetching resident details:", error);
      }
    };

    fetchResidentDetails();
  }, [isModalOpen, residents]);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="flex flex-col space-y-1.5 p-4 pb-2">
        <h3 className="text-3xl font-semibold whitespace-nowrap leading-none tracking-tight">
          {name}
        </h3>
        <p className="text-md text-muted-foreground flex items-center gap-1">
          <span>
            <TbPlanet />
          </span>
          {diameter}m
        </p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <CardRow icon={<FaSun />} label="Climate" value={climate} />
        <CardRow icon={<FaMountain />} label="Terrain" value={terrain} />
        <CardRow icon={<FaUsers />} label="Population" value={population} />
      </div>
      <div className="flex items-center p-4">
        <button
          onClick={openModal}
          className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-500 text-black hover:bg-yellow-400 h-8 rounded-md px-2"
        >
          VIEW RESIDENTS
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-20">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Residents Details
                </h2>

                <div className="">
                  {residentDetails.length > 0 ? (
                    residentDetails.map((resident, index) => (
                      <ResidentDetails key={index} data={resident} />
                    ))
                  ) : (
                    <h1 className="text-black font-bold text-2xl py-3 animate-pulse ">
                      Loading . . .
                    </h1>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-yellow-500 hover:bg-yellow-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetCard;

const CardRow = ({ icon, label, value }) => (
  <div className="flex flex-row items-start gap-2 text-sm">
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="font-medium">{label}- </h3>
    </div>

    <p className="font-normal truncate">{value}</p>
  </div>
);
