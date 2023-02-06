import "./osfHero.css";
import osfLogo from "../../Images/OSFLogo.png"
import osfBackground from "../../Images/OSFBackground.png"
import Buttin from "../Buttin/buttin.js"
import {Link as LinkS} from "react-scroll"

import {motion as m} from "framer-motion";

export default function OsfHero() {
    return (
        <div className="osfHero" style={{backgroundImage: `url(${osfBackground})`}}>
            <m.div className="row osfHeroContainer"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
               <div className="col-lg-6 ps-0 textLogo">
                    <div style={{textAlign: 'center'}}>
                        <img alt="OSF Logo" className="osfLogo" src={osfLogo}></img>
                    </div>
                    <div className="text">
                        <h1 className="pageTitle">OSF Posture Application</h1>
                        <br/>
                        <p>
                        This project was a collaboration of which I had the opportunity of working with a physical therapist at OSF HealthCare. I and two other classmates spent ten weeks designing in Figma and user testing this application with medical professionals and medical students.
                        </p>
                        <p>
                        After we had a design that was greenlit by our client, I alone was tasked with prototyping the application using Bubble.io for the remaining four weeks of the semester. I have included on this page a working Bubble.io prototype of what came to be called Upright Me.
                        </p>
                    </div>
                    <br/>
                    <LinkS to="osfDesigns" spy={true} smooth={true} duration={100}>
                        <Buttin>View Designs</Buttin>
                    </LinkS>
                </div>
                <div className="col-lg-6 pe-0 image">
                    <div className="prototype">
                    <p>WORKING(ish) PROTOTYPE</p>
                        <iframe loading="eager" scrolling="no" className="iframe" src="https://forwebsite.bubbleapps.io/version-test?debug_mode=true"></iframe>
                    </div>
                </div> 
            </m.div>
        </div>
    )
}