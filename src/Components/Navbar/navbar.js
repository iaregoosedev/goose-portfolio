import Logo from "../../Data/logo";
import { Link } from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import { useRef } from "react";
import "./navbar.css"

import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {
    const navRef = useRef();
    const linkRef = useRef();
    const headerRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
        headerRef.current.classList.toggle("header_height");
        linkRef.current.classList.toggle("visible_links");
    }

    const closeNav = () => {
        navRef.current.classList.remove("responsive_nav");
        headerRef.current.classList.remove("header_height");
        linkRef.current.classList.remove("visible_links");
    }
    
    return (
        <header ref={headerRef}>
            <div className="navBar" ref={navRef}>
                <div className="navContainer">
                    <div className="col-10 col-lg-4 navLeft">
                        {/* <Logo/> */}
                        <LinkS className="noActive" to="hero" spy={true} smooth={true} offset={-80} duration={100} onClick={closeNav}>
                            <Link to={"/"}>
                                <h1 className="m-0">Jason Bessett</h1>
                            </Link>
                        </LinkS>
                    </div>
                    <nav ref={linkRef} className="col-lg-8">
                        <LinkS className="navItem" to="aboutMe" spy={true} smooth={true} duration={100} onClick={showNav}>
                            <li>
                                <h5 className="m-0">About Me</h5>
                            </li>
                        </LinkS>
                        <LinkS className="navItem" to="portfolioGallery" spy={true} smooth={true} duration={100} onClick={showNav}>
                            <li>
                                <h5 className="m-0">Portfolio</h5>
                            </li>
                        </LinkS>
                        <LinkS className="navItem" to="resume" spy={true} smooth={true} duration={100} onClick={showNav}>
                            <li>
                                <h5 className="m-0">Resume</h5>
                            </li>
                        </LinkS>
                        <LinkS className="navItem" to="contactMe" spy={true} smooth={true} duration={100} onClick={showNav}>
                            <li>
                                <h5 className="m-0">Contact Me</h5>
                            </li>
                        </LinkS>
                    </nav>
                    <div className="navButtin" onClick={showNav}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg> */}
                        <Hamburger rounded size={30}/>
                    </div>
                </div>
            </div>
        </header>
   )
}