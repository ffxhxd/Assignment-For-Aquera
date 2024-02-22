import React, { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  // Function for checking screen sizes for responsive header
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-white">
      {screenWidth > 768 ? (
        <DesktopHeader />
      ) : (
        <MobileHeader toggle={toggle} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Header;
