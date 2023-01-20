import "../PortfolioGallery/portfolioGallery.css"
import osfBackground from "../../Images/OSFBackground.png"
import catBackground from "../../Images/CatBackground.jpg"
import SSBackground from "../../Images/ssBackground.png"
import llBackground from "../../Images/LLBackground.png"

export default function PorfolioGallery() {
    return (
        <div className="portfolioGallery">
            <div className="container">
                <h6 style={{color: 'orange'}}>PORTFOLIO</h6>
                <h2>I made some stuff</h2>
                <div className="galleryGrid">
                    <a className="portfolioCard" style={{backgroundImage: `url(${llBackground})`}}>
                        <img className="logo" src={require('../../Images/LLLogo.png')}/>
                        <h2>Luminos Labs</h2>
                    </a>
                    <a className="portfolioCard" style={{backgroundImage: `url(${osfBackground})`}}>
                        <img className="logo" src={require('../../Images/OSFLogo.png')}/>
                        <h2>OFS Posture App</h2>
                    </a>
                    <a className="portfolioCard" style={{backgroundImage: `url(${catBackground})`}}>
                        <img className="logo" src={require('../../Images/CatLogo.png')}/>
                        <h2>Caterpillar Design Challenge</h2>
                    </a>
                    <a className="portfolioCard" style={{backgroundImage: `url(${SSBackground})`}}>
                        <img className="logo" src={require('../../Images/ssLogo.png')}/>
                        <h2>7Summits Internship</h2>
                    </a> 
                </div> 
            </div>
            
        </div>
        
    )
}