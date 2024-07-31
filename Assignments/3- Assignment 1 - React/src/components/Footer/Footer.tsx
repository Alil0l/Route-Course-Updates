import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="mainFooter">
          <div className="location">
            <h2>Location</h2>
            <p>123 Main St, Anytown, USA 12345</p>
          </div>
          <div className="links">
            <h2>Links</h2>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="aboutMe">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              hic.
            </p>
          </div>
        </footer>
      </div>
      <footer className="copyRights">
        <p> Ali Mostafa &copy; 2024 Cairo, Egypt.</p>
      </footer>
    </div>
  );
}
