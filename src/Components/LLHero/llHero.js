import "./llHero.css";
import llLogo from "../../Images/LLLogo.png"
import llBackground from "../../Images/LLBackground.png"
import Buttin from "../Buttin/buttin.js"
import {Link as LinkS} from "react-scroll"
import {motion as m} from "framer-motion";
import LLGallery from "../LLGallery/llGallery";

export default function LLHero() {
    return (
        <div className="ssHero" style={{backgroundImage: `url(${llBackground})`}}>
            <m.div className="ssHeroContainer"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
               <div className="row textLogo mb-4">
                    <div className="col-lg-6" style={{textAlign: 'center', maxHeight: "300px", padding: '20px'}}>
                        <img alt="Luminos Labs Logo" className="llLogo" src={llLogo}></img>
                    </div>
                    <div className="col-lg-6 text">
                        <h1 className="pageTitle">Luminos Labs</h1>
                        <h3 className="pageTitle">Jr. User Experience Designer</h3>
                        <br/>
                        <p>
                        I was resposible for designing end-user experience solutions for eCommerce replatform projects. I utilized Figma to build a library of reusable components that would be used as jumping off points for designs. I also helped with deveolopment of designs as a front-end developer.
                        </p>
                        {/* <br/>
                        <LinkS to="lwc" offset={-48} spy={true} smooth={true} duration={100}>
                            <Buttin>Websites I worked on</Buttin>
                        </LinkS> */}
                    </div>
                </div>
                <LLGallery/>
                {/* <img alt="Mockup of a component for 7Summits" className="image" src={require("../../Images/ssBackground.png")}></img> */}
            </m.div>
        </div>
    )
}