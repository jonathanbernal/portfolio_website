// Import font-awesome icons used on the navbar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav--links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li>
          <a href="https://github.com/jonathanbernal" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="nav--link_icon" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/jonathanbernal2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="nav--link_icon linkedin_logo" />
          </a>
        </li>
      </ul>
    </nav>
  )
}



export default Navbar;