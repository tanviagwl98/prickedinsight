import { createBrowserRouter, Outlet } from "react-router-dom";
import React from "react";
import { Header } from "../Views/Header/Header";
import { Footer } from "../Views/Footer/Footer";
import Error from "../Components/Error";
import { Home } from "../Components/Home/Home";
import { Testimonials } from "../Components/Testimonials/Testimonials";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

export default AppRouter;