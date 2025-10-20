import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routee from "./routes";
// import App from './App.jsx'
const routers = createBrowserRouter(routee);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
    {/* <App /> */}
  </StrictMode>
);
