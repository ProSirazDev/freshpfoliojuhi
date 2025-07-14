import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Hide the loader after React app mounts
const hideLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden"); // Add the "hidden" class to hide the loader
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Wait for React to render before hiding the loader
hideLoader();
