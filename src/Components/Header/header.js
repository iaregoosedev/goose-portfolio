import { Link } from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import "../Header/header.css"
import Logo from "./../../Data/logo.js"
import { useRef } from "react";

export default function Header() {
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <div className="header">
            <div className="headerRow">
                <div className="col-9 col-lg-5 nameLogo">
                    <Logo/>
                    <LinkS className="noActive" to="hero" spy={true} smooth={true} offset={-80} duration={100}>
                        <Link to={"/"}>
                            <h1 className="m-0 name">Jason Bessett</h1>
                        </Link>
                    </LinkS>
                </div>
                <ul ref={navRef} className="col-3 col-lg-7 navLinks">
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
                    <div className="navBtn" onClick={showNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                </ul>
                <div className="navBtn" onClick={showNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}