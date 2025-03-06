import React from "react";

export default function Testimonial() {
  return (
    <div className="withPicture">
      <img
        src="./components/Testimonials/pictures/portrait.png"
        className="portrait"
      />
      <div className="float-div">
        <img
          src="./components/Testimonials/pictures/portrait-cropped.png"
          className="portrait-cropped"
        />
        <img
          src="./components/Testimonials/pictures/dictate.png"
          className="narekovaj"
        />
        <p className="p-picture">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
          voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum
          sed rerum et corporis.
        </p>
        <div className="signature-picture">
          <div className="name-div">May Andersons</div>
          <span className="span-picture">/</span>
          <div>Workcation, CTO</div>
        </div>
      </div>
    </div>
  );
}
