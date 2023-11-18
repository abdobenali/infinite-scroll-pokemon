import { useState, useEffect } from "react";

const getInitialTheme = () => {
  const persistedColorPreference = window.localStorage.getItem("data-mode");

  if (persistedColorPreference) {
    localStorage.setItem("data-mode", persistedColorPreference);
    return persistedColorPreference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  if (mql) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  const handleThemeChange = () => {
    if (theme === "dark") {
      localStorage.setItem("data-mode", "light");
      setTheme(getInitialTheme());
    }
    if (theme === "light") {
      localStorage.setItem("data-mode", "dark");
      setTheme(getInitialTheme());
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", theme);
  }, [theme]);

  return { theme, toggleTheme: handleThemeChange };
};

export default useTheme;
