import React from "react";

const PageHeadings = ({ heading, description }) => {
  return (
    <div className="pt-10 mb-10 md:mb-0 bg-amber-300">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        {heading}
      </h2>

      <p className="mx-auto px-2 max-w-screen-md text-center text-gray-800 md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default PageHeadings;
