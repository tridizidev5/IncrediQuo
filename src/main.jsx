import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./appStyles/AppLayout.css";   // ✅ global layout + base styles
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
