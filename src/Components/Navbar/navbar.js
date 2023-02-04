import Logo from "../../Data/logo";
import { Link } from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import { useRef } from "react";
import { useState } from "react";
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

    const [isOpen, setOpen] = useState(false)

    const hamClick = () => {
        if(setOpen(false)) {
            setOpen(!isOpen);
        }
    }
    
    return (
        <header ref={headerRef}>
            <div className="navBar" ref={navRef}>
                <div className="navContainer">
                    <div className="col-10 col-lg-4 navLeft">
                        {/* <Logo/> */}
                        <LinkS className="noActive" to="hero" spy={true} smooth={true} offset={-80} duration={100} onClick={() => {closeNav(); hamClick();}}>
                            <Link to={"/"}>
                                <h1 className="m-0">Jason Bessett</h1>
                            </Link>
                        </LinkS>
                    </div>
                    <nav ref={linkRef} className="col-lg-8">
                        <LinkS className="navItem" to="aboutMe" spy={true} smooth={true} duration={100} onClick={() => {showNav(); hamClick();}}>
                            <li>
                                <h5 className="m-0">About Me</h5>
                            </li>
                        </LinkS>
                        <LinkS className="navItem" to="portfolioGallery" spy={true} smooth={true} duration={100} onClick={() => {showNav(); hamClick();}}>
                            <li>
                                <h5 className="m-0">Portfolio</h5>
                            </li>
                        </LinkS>
                        <LinkS className="navItem" to="resume" spy={true} smooth={true} duration={100} onClick={() => {showNav(); hamClick();}}>
                            <li>
                                <h5 className="m-0">Resume</h5>
                            </li>
                        </LinkS>
                        <LinkS className="navItem" to="contactMe" spy={true} smooth={true} duration={100} onClick={() => {showNav(); hamClick();}}>
                            <li>
                                <h5 className="m-0">Contact Me</h5>
                            </li>
                        </LinkS>
                    </nav>
                    <div className="navButtin" onClick={showNav}>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={30}/>
                    </div>
                </div>
            </div>
        </header>
   )
}