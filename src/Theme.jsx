import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context/Context";
const Theme = () => {
  const { darkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {darkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default Theme;
