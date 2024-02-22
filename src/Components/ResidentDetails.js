import React from "react";

const ResidentDetails = (props) => {
  const { name, gender, mass, hair_color, birth_year } = props.data;

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4 ">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p className="text-sm text-gray-600">Gender: {gender}</p>
          <p className="text-sm text-gray-600">Mass: {mass}</p>
          <p className="text-sm text-gray-600">Hair Color: {hair_color}</p>
          <p className="text-sm text-gray-600">Birth Year: {birth_year}</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentDetails;
