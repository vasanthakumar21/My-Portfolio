import React, { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

export const ThemeProvider = ({ children }) => { 
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light" 
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggletheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log("Theme toggled to", theme);
  };

  return (
    <themeContext.Provider value={{ theme, toggletheme }}>
      {children} 
    </themeContext.Provider>
  );
};
