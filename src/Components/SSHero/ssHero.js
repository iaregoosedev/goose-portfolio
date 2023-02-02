import "./ssHero.css";
import ssLogo from "../../Images/ssLogo.png"
import ssBackground from "../../Images/ssBackground.png"
import Buttin from "../Buttin/buttin.js"
import {Link as LinkS} from "react-scroll"

import {motion as m} from "framer-motion";

export default function SSHero() {
    return (
        <div className="ssHero" style={{backgroundImage: `url(${ssBackground})`}}>
            <m.div className="ssHeroContainer"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
               <div className="row textLogo mb-4">
                    <div className="col-6" style={{textAlign: 'center', maxHeight: "300px"}}>
                        <img className="ssLogo" src={ssLogo}></img>
                    </div>
                    <div className="col-6 text">
                        <h1 className="pageTitle">7Summits Internship</h1>
                        <br/>
                        <p>
                        During my internship, I Worked closely with the lightning web component development team as a front end developer, creating multiple web components. This was where my coding skills were put to the test for the first time in a real world working environment.
                        </p>
                        <br/>
                        <LinkS to="lwc" offset={-48} spy={true} smooth={true} duration={100}>
                            <Buttin>View Published Components</Buttin>
                        </LinkS>
                    </div>
                </div>
                <img className="image" src={require("../../Images/ssBackground.png")}></img>
            </m.div>
        </div>
    )
}