import portrait from "./pictures/portrait.png";
import portraitCropped from "./pictures/portrait-cropped.png";
import quotation from "./pictures/dictate.png";

export default function Testimonial() {
  return (
    <div className="withPicture">
      <img src={portrait} className="portrait" />
      <div className="float-div">
        <img src={portraitCropped} className="portrait-cropped" />
        <img src={quotation} className="quotation" />
        <p>
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
