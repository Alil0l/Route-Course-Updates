import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avater from "../../assets/avater.svg";
import "./Home.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="home">
      <div className="profile">
        <img src={avater} alt="" />
      </div>
      <h1>Start Framework</h1>
      <div className="lines">
        <div className="line"></div>
        <FontAwesomeIcon icon={faStar} />
        <div className="line"></div>
      </div>
      <p>FrontEnd Developer , UI Designer , Flutter Developer</p>
    </div>
  );
}
