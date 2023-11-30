import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = ({ className }) => {
  return (
    <nav className={className}>
      <a href="#">
        <i>
          <FontAwesomeIcon icon={faFacebookF} />
        </i>
      </a>
      <a href="#">
        <i>
          <FontAwesomeIcon icon={faInstagram} />
        </i>
      </a>
      <a href="#">
        <i>
          <FontAwesomeIcon icon={faYoutube} />
        </i>
      </a>
      <a href="#">
        <i>
          <FontAwesomeIcon icon={faTiktok} />
        </i>
      </a>
    </nav>
  );
};

export default SocialMedia;
