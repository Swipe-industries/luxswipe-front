import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store.js";
import { Provider } from "react-redux";
import Root from "./Root.jsx";
import Layout from "./Layout.jsx";
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
import Login from "./components/Login/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import NewUser from "./pages/NewUser.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Error />} />
        <Route path="faq" element={<Error />} />
        <Route path=":username" element={<Error />} />
      </Route>

      <Route path="/auth" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="newuser" element={<NewUser />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </React.StrictMode>
  </Provider>
);
