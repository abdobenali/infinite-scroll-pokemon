import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext(null);

const ThemeProvider = (props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
