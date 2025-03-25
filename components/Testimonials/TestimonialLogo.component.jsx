import logo from "./pictures/Logo.png";

export default function TestimonialLogo() {
  return (
    <div className="testimonial">
      <img src={logo} className="logo" />
      <p>
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
        voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
        rerum et corporis.”
      </p>
      <div className="signature">
        <div>May Andersons</div>
        <span className="span">/</span>
        <div>Workcation, CTO</div>
      </div>
    </div>
  );
}
