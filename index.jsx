import React from "react";
import ReactDOM from "react-dom/client";
import Badge from "./components/Badge/Badge-Component";
import Banners from "./components/Banners/Banners--Component";
import Card from "./components/Card/Card-Component";
import TestimonialLogo from "./components/Testimonials/TestimonialLogo-Component";
import TestimonialPicture from "./components/Testimonials/TestimonialPicture-Component";
import Tooltip from "./components/Tooltip/Tooltip-Component";
import Toasts from "./components/Toasts/Toasts-Component";

function App() {
  return (
    <>
      <h1>Components library</h1>
      <br />
      <br />
      <h2>Badge component:</h2>
      <div className="badges">
        <Badge />
        <br />
        <Badge roundEdge />
      </div>
      <br />
      <br />
      <br />
      <h2>Banners Components:</h2>
      <Banners />
      <br />
      <h2>Card component:</h2>
      <div className="card-background">
        <Card />
      </div>
      <br />
      <br />
      <h2>Testimonial components:</h2>
      <TestimonialLogo />
      <br />
      <br />
      <TestimonialPicture />
      <br />
      <br />
      <br />
      <h2>Tooltip components:</h2>
      <Tooltip style="light" />
      <br />
      <br />
      <Tooltip style="dark" />
      <br />
      <br />
      <br />
      <h2>Toasts component:</h2>
      <Toasts />
      <br />
      <br />
      <br />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
