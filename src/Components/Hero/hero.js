import "../Hero/hero.css"
import osfBackground from "../../Images/OSFBackground.png"
import { ChevronDoubleDown } from "react-bootstrap-icons"
import {Link as LinkS} from "react-scroll"
import {motion as m} from "framer-motion";

export default function Hero() {
    return (
        <m.div className="hero" style={{backgroundImage: `url(${osfBackground})`}}
        initial={{height: window.innerHeight}}>
            <div className="textCenter">
                <h2>Hello, I’m Jason<br/><br/>I design <span style={{color: '#dd9510', whiteSpace: 'nowrap'}}>Simple Solutions </span>for <span style={{color: '#dd9510', whiteSpace: 'nowrap'}}>Complex Problems</span>.</h2>
                <div className="skills">
                    <div className="skillLogo ">
                        <img alt="Figma Logo" style={{maxHeight: '100%'}} src={require('../../Images/HomeLogos/FigmaLogo.png')}></img>
                    </div>
                    <div className="skillLogo ">
                        <img alt="Creative Cloud Logo" style={{maxHeight: '100%'}} src={require('../../Images/HomeLogos/CCLogo.png')}></img>
                    </div>
                    <div className="skillLogo">
                        <img alt="html Logo" style={{maxHeight: '100%'}} src={require('../../Images/HomeLogos/html5-logo-c.png')}></img>
                    </div>
                    <div className="skillLogo ">
                        <img alt="css Logo" style={{maxHeight: '100%'}} src={require('../../Images/HomeLogos/css-logo-c.png')}></img>
                    </div>
                    <div className="skillLogo ">
                        <img alt="javaScript Logo" style={{maxHeight: '100%'}} src={require('../../Images/HomeLogos/js-logo-c.png')}></img>
                    </div>
                </div>
            </div>
            <m.div
            initial={{height: window.innerHeight}}>
                <LinkS to="aboutMe" className="heroArrow">
                    <h5 className="p-2 m-0">Learn More</h5>
                    <ChevronDoubleDown size={24}/>
                </LinkS>
            </m.div>
        </m.div>
    )
}