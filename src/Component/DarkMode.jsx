/* eslint-disable no-unused-vars */
import React from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {theme === "light" ? (
        <WbSunnyIcon
          onClick={changeTheme}
          className="w-12 h-12 cursor-pointer text-yellow-500"
        />
      ) : (
        <NightlightIcon
          onClick={changeTheme}
          className="w-12 h-12 cursor-pointer text-blue-500"
        />
      )}
    </div>
  );
};

export default DarkMode;
