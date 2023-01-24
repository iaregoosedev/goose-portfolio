import "../PortfolioGallery/portfolioGallery.css"
import {Link} from 'react-router-dom'
import osfBackground from "../../Images/OSFBackground.png"
import catBackground from "../../Images/CatBackground.jpg"
import SSBackground from "../../Images/ssBackground.png"
import llBackground from "../../Images/LLBackground.png"
import {motion as m} from "framer-motion";
import {BgChangeLL, BgChangeCat, BgChangeOSF, BgChangeSS} from "../backgroundChange.js"

export default function PorfolioGallery() {
    return (
        <div className="portfolioGallery">
            <div className="container">
                <h6 style={{color: 'orange'}}>PORTFOLIO</h6>
                <h2>I made some stuff</h2>
                <m.div className="galleryGrid"
                // initial={{scale: 50, background: "rgba(255, 255, 255, 1)"}}
                // animate={{background:"rgba(255, 255, 255, 0.0)", scale: 1, transition:{duration: .3}}}
                // exit={{scale: 5, background: "#D0D2D8", transition:{duration: 0.3}}}
                >
                    <m.div
                    // initial={{opacity: 0}}
                    // animate={{opacity: 1, transition:{duration: 1}}}
                    // exit={{opacity: 0, transition:{duration: 0.1}}}
                    >
                        <Link to="/LuminosLabs" className="portfolioCard" style={{backgroundImage: `url(${llBackground})`}} onClick={BgChangeLL}>
                            <img className="logo" src={require('../../Images/LLLogo.png')}/>
                            <h2>Luminos Labs</h2>
                        </Link>
                    </m.div>
                    <m.div
                    // initial={{opacity: 0}}
                    // animate={{opacity: 1, transition:{duration: 1}}}
                    // exit={{opacity: 0, transition:{duration: 0.1}}}
                    >
                        <Link to="/OSF" className="portfolioCard" style={{backgroundImage: `url(${osfBackground})`}} onClick={BgChangeOSF}>
                            <img className="logo" src={require('../../Images/OSFLogo.png')}/>
                            <h2>OFS Posture App</h2>
                        </Link>
                    </m.div>
                    <m.div
                    // initial={{opacity: 0}}
                    // animate={{opacity: 1, transition:{duration: 1}}}
                    // exit={{opacity: 0, transition:{duration: 0.1}}}
                    >
                        <Link to="/CAT" className="portfolioCard" style={{backgroundImage: `url(${catBackground})`}} onClick={BgChangeCat}>
                            <img className="logo" src={require('../../Images/CatLogo.png')}/>
                            <h2>Caterpillar Design Challenge</h2>
                        </Link>
                    </m.div>
                    <m.div
                    // initial={{opacity: 0}}
                    // animate={{opacity: 1, transition:{duration: 1}}}
                    // exit={{opacity: 0, transition:{duration: 0.1}}}
                    >
                        <Link to="/7Summits" className="portfolioCard" style={{backgroundImage: `url(${SSBackground})`}} onClick={BgChangeSS}> 
                            <img className="logo" src={require('../../Images/ssLogo.png')}/>
                            <h2>7Summits Internship</h2>
                        </Link>
                        
                    </m.div> 
                </m.div> 
            </div>
            
        </div>
        
    )
}