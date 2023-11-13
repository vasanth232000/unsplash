import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialTheme = () => {
  const preferedState = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  console.log(preferedState);
  localStorage.setItem("dark-theme", preferedState);
  return preferedState;
};

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialTheme());
  const [searchTerm, setSearchterm] = useState("cat");

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("dark-theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);
  return (
    <AppContext.Provider
      value={{ darkTheme, toggleTheme, searchTerm, setSearchterm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
