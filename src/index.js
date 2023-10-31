import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import AddVehical from "./screens/AddVehical";
import ViewVehical from "./screens/ViewVehical";
import { Notfound } from "./screens/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddVehical />} />
      <Route path="/view/:id" element={<ViewVehical />} />
      <Route path="*" element={<Notfound />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
