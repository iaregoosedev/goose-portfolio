import "../AboutMe/aboutMe.css"
import React from "react"
import Headshot from "../../Images/Headshot.JPG"
import Buttin from "../Buttin/buttin.js"
import {Link as LinkS} from "react-scroll"

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="aboutContainer row gx-6">
                <div className="col-lg-6 aboutLeft ps-0">
                    <h6 style={{color: '#dd9510'}}>ABOUT ME</h6>
                    <h2>I like to build stuff</h2>
                    <p>I am a User Experience Designer with a concentration in design development. I am skilled with Figma, Adobe Suite, HTML, CSS, and JS.</p>
                    <LinkS to="portfolioGallery" spy={true} smooth={true} duration={100}>
                        <Buttin>See my Portfolio</Buttin>
                    </LinkS>
                </div>
                <div className="col-lg-6 aboutRight pe-0">
                    <div className="headshot" style={{backgroundImage: `url(${Headshot})`}}></div>
                </div>
            </div>
            
        </div>
    )
}