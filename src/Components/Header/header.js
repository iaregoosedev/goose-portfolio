import { Link } from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import "../Header/header.css"
import Logo from "./../../Data/logo.js"

export default function Header() {
    return (
        <div className="header">
            <div className="headerRow">
                <div className="col-5 nameLogo">
                    <Logo/>
                    <LinkS className="noActive" to="hero" spy={true} smooth={true} offset={-80} duration={100}>
                        <Link to={"/"}>
                            <h1 className="m-0 name">Jason Bessett</h1>
                        </Link>
                    </LinkS>
                </div>
                <ul className="col-7 navLinks">
                    <LinkS className="navLink" to="aboutMe" spy={true} smooth={true} duration={100}>
                        <li>
                            <h6 className="m-0">About Me</h6>
                        </li>
                    </LinkS>
                    <LinkS className="navLink" to="portfolioGallery" spy={true} smooth={true} duration={100}>
                        <li>
                            <h6 className="m-0">Portfolio</h6>
                        </li>
                    </LinkS>
                    <LinkS className="navLink" to="resume" spy={true} smooth={true} duration={100}>
                        <li>
                            <h6 className="m-0">Resume</h6>
                        </li>
                    </LinkS>
                    <LinkS className="navLink" to="contactMe" spy={true} smooth={true} duration={100}>
                        <li>
                            <h6 className="m-0">Contact Me</h6>
                        </li>
                    </LinkS>
                </ul>
            </div>
        </div>
    )
}