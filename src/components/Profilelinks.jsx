import photoProfile from "../assets/Oval.svg";
import arrow from "../assets/Oval 2.svg";
import "./Profilelinks.css";
export const Profilelinks = ({ handleButtonClick }) => {
  return (
    <section className="profile">
      <article className="container-profile-info">
        <img src={photoProfile} alt="photo profile" />
        <div className="profile-text">
          <h3 className="michele-font">Michele Appleton</h3>
          <span className="date-font">28 Jun 2020</span>
        </div>
      </article>
      <img onClick={handleButtonClick} src={arrow} alt="arrow" />
    </section>
  );
};
