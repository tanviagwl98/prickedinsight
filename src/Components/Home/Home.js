import React from "react";
import { Testimonials } from "../Testimonials/Testimonials";
import HorizontalCarousel from "../../Views/Carousel/HorizontalCarousel";

export const Home = () => {
  return (
    <>
      <HorizontalCarousel />
      <Testimonials />
    </>
  );
};
