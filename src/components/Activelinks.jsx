import "./Activelinks.css";
import icons from "../assets/Group 4.png";
import arrowBlack from "../assets/Oval 3.png";
import fondo from "../assets/Combined Shape.svg";
export const Activelinks = ({ handleButtonClick }) => {
  return (
    <section className="links-container">
      <img className="fondo" src={fondo} alt="fondo" />
      <div className="incon-container">
        <span className="share-font">SHARE</span>
        <img src={icons} alt="icons" />
      </div>
      <div className="arrowblack">
        <img onClick={handleButtonClick} src={arrowBlack} alt="arrowblack" />
      </div>
    </section>
  );
};
