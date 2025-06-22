import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GameProvider } from "./useGame";
import { TimerProvider } from "./useTimer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimerProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </TimerProvider>
  </React.StrictMode>
);
