import "../Hero/hero.css"
import osfBackground from "../../Images/OSFBackground.png"
import { ChevronDoubleDown } from "react-bootstrap-icons"
import {Link as LinkS} from "react-scroll"
import {motion as m} from "framer-motion";

export default function Hero() {
    return (
        <m.div className="hero" style={{backgroundImage: `url(${osfBackground})`}}
        initial={{height: window.innerHeight}}>
            <div className="textImage">
                <div className="col-9 col-lg-5 heroLeft">
                    <div className="textContainer">
                        <h2>Hello, I’m Jason<br/>I design the <span style={{color: '#dd9510'}}>Complex</span>.</h2>
                    </div>
                </div>
                <div className="col-3 col-lg-7 heroRight">

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