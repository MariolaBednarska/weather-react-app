import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather">
      <h1>Weather App</h1>
      <App />
      <footer>
        <a href="https://github.com/MariolaBednarska/weather-react-app">
          Open-source code
        </a>
        , by Mariola Bednarska
      </footer>
    </div>
  </React.StrictMode>
);
