import React from "react";
import ThemeProvider from "./providers/ThemeProvider";
import Main from "./components/Main";

const App = () => {
  return (
    <ThemeProvider>
      <Main className="bg-white dark:bg-gray-800" />
    </ThemeProvider>
  );
};

export default App;
