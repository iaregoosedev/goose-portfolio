import "../Hero/hero.css"
import osfBackground from "../../Images/OSFBackground.png"
import { ChevronDoubleDown } from "react-bootstrap-icons"
import {Link as LinkS} from "react-scroll"

export default function Hero() {
    return (
        <div className="hero" style={{backgroundImage: `url(${osfBackground})`}}>
            <div className="textImage" >
                <div className="col-5 heroLeft">
                    <div className="textContainer">
                        <h2>Hello, I’m Jason<br/>I design the <span style={{color: 'orange'}}>Complex</span></h2>
                    </div>
                </div>
                <div className="col-7 heroRight">

                </div>
            </div>
            <LinkS to="aboutMe" className="heroArrow">
                <h5 className="p-2 m-0">Learn More</h5>
                <ChevronDoubleDown size={24}/>
            </LinkS>
        </div>
    )
}