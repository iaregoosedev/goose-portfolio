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
                <h6 style={{color: '#dd9510'}}>PORTFOLIO</h6>
                <h2>I made some stuff</h2>
                <div className="galleryGrid">
                    <Link to="/LuminosLabs" className="portfolioCard" style={{backgroundImage: `url(${llBackground})`}} onClick={BgChangeLL}>
                        <img alt="Luminos Labs Logo" className="logo" src={require('../../Images/LLLogo.png')}/>
                        <h2>Luminos Labs</h2>
                    </Link>
                    <Link to="/OSF" className="portfolioCard" style={{backgroundImage: `url(${osfBackground})`}} onClick={BgChangeOSF}>
                        <img alt="OSF Logo" className="logo" src={require('../../Images/OSFLogo.png')}/>
                        <h2>OFS Posture App</h2>
                    </Link>
                    <Link to="/7Summits" className="portfolioCard" style={{backgroundImage: `url(${SSBackground})`}} onClick={BgChangeSS}> 
                        <img alt="7Summits Logo" className="logo" src={require('../../Images/ssLogo.png')}/>
                        <h2>7Summits Internship</h2>
                    </Link>
                    <Link to="/CAT" className="portfolioCard" style={{backgroundImage: `url(${catBackground})`}} onClick={BgChangeCat}>
                        <img alt="Caterpillar Logo" className="logo" src={require('../../Images/CatLogo.png')}/>
                        <h2>Caterpillar Design Challenge</h2>
                    </Link>
                    
                </div> 
            </div>
            
        </div>
        
    )
}