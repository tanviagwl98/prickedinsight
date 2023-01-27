import React from "react";
import { Card } from "../../Views/Card/Card";
import "../../Components/Testimonials/Testimonials.css";

export const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="heading">TESTIMONIALS</div>
      <div className="card-container">
        {" "}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
