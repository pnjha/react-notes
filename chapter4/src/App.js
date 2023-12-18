import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PageLayout = (props) => (
  <>
    <Header />
    {props.component()}
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout component={Body} />,
    errorElement: <PageLayout component={Error} />
  },
  {
    path: "/about",
    element: <PageLayout component={About} />
  },
  {
    path: "/contact",
    element: <PageLayout component={Contact} />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
