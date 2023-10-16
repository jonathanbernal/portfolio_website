// Import font-awesome icons used on the navbar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {Outlet, Link} from 'react-router-dom';  

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav--links">
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/about`}>About</Link></li>
        <li><Link to={`/projects`}>Projects</Link></li>
        <li>
          <a href="https://github.com/jonathanbernal" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="nav--link_icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jonathanbernal2/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="nav--link_icon linkedin_logo" />
          </a>
        </li>
      </ul>
    </nav>
  )
}



export default Navbar;