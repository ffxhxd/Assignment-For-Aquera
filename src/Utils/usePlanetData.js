import { useEffect, useState } from "react";
import { SWAPI_URL } from "./Constants";

const usePlanetData = (page) => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    //debouncing
    const timer = setTimeout(() => fetchData(), 100);

    //clean up
    return () => {
      clearTimeout(timer);
    };
  }, [page]);

  const fetchData = async () => {
    try {
      //console.log("api called");
      const data = await fetch(SWAPI_URL + page + "&format=json");
      const json = await data.json();
      setPlanetData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return planetData;
};

export default usePlanetData;
