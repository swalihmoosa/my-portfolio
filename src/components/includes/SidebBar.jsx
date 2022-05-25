import '../../assets/scss/SideBar.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faStackOverflow,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'


export default function SidebBar() {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="Logo" />
                {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
                SWALIH
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="skills-link" to="/skills" >
                    <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/swalih-moosa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin}  />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/swalihmoosa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub}  />
                    </a>
                </li>
                <li>
                    <a
                        href="https://stackoverflow.com/users/19142237/swalih-moosa"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faStackOverflow}  />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/8129133008" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp}  />
                    </a>
                </li>
            </ul>
        </div>
    )
}
