import React, { useState } from "react";
import { carousel } from "../../config";
import CarouselCard from "./CarouselCard";
// import { FontAwesomeIcon } from "@fortawesome/reactfontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrrowRight,
} from "@mui/icons-material";
import "./HorizontalCarousel.css";

function HorizontalCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [carouselData] = useState(carousel);
  console.log(carouselData, "data");

  const slideLeft = () => {
    if (slideIndex - 1 >= 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const slideRight = () => {
    if (slideIndex + 1 <= carouselData.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="container">
      <KeyboardArrowLeft onClick={slideLeft} className="leftBtn" />

      <div className="card-container">
        {carouselData.map((card, n) => {
          let position =
            n > slideIndex
              ? "nextCard"
              : n === slideIndex
              ? "activeCard"
              : "prevCard";
          return <CarouselCard {...card} cardStyle={position} />;
        })}
      </div>
      <KeyboardArrowRight onClick={slideRight} className="rightBtn" />
    </div>
  );
}

export default HorizontalCarousel;
