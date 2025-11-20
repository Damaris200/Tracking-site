import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initTheme } from "./theme";
import { ThemeProvider } from "./contexts/ThemeContext";

// Initialize theme synchronously to prevent flash of wrong theme
initTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
