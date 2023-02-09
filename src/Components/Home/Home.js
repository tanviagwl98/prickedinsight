import React from "react";
import { Testimonials } from "../Testimonials/Testimonials";
import HorizontalCarousel from "../../Views/Carousel/HorizontalCarousel";
import BooksPublished from "../BooksPublished/BooksPublished";

export const Home = () => {
  return (
    <>
      <HorizontalCarousel />
      <BooksPublished/>
      <Testimonials />
    </>
  );
};
