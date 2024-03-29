import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import FAQ from "./pages/FAQ.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<Error />} />
      <Route path="contact-us" element={<Error />} />
      <Route path="faq" element={<Error />} />
      <Route path=":username" element={<Error />} />
      <Route path="login" element={<Error />} />
      <Route path="signup" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
