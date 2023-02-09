import "../LLGallery/llGallery.css"
import {Link} from 'react-router-dom'
import chefsBackground from "../../Images/ChefsBG.png"
import chBackground from "../../Images/classichomeBG.png"
import dumpBackground from "../../Images/dumpBG.png"
import llBackground from "../../Images/LLBackground.png"
import {BgChangeLL, BgChangeCat, BgChangeOSF, BgChangeSS} from "../backgroundChange.js"

export default function LLGallery() {
    return (
        <div className="llGallery">
            <div className="container">
                {/* <h6 style={{color: '#dd9510'}}></h6> */}
                <div className="llGalleryGrid">
                    <a href="https://www.haynesfurniture.com/" target="_blank" className="llCard" onClick={BgChangeLL}>
                        {/* <img alt="Luminos Labs Logo" className="logo" src={require('../../Images/LLLogo.png')}/> */}
                        <div className="cardImage" style={{backgroundImage: `url(${llBackground})`}}></div>
                        <h2>Haynes Furniture</h2>
                    </a>
                    <a href="https://www.chefswarehouse.com/" target="_blank" className="llCard"  onClick={BgChangeOSF}>
                        {/* <img alt="OSF Logo" className="logo" src={require('../../Images/OSFLogo.png')}/> */}
                        <div className="cardImage" style={{backgroundImage: `url(${chefsBackground})`}}></div>
                        <h2>Chefs Warehouse</h2>
                    </a>
                    <a href="https://www.thedump.com/" target="_blank" className="llCard"  onClick={BgChangeSS}> 
                        {/* <img alt="7Summits Logo" className="logo" src={require('../../Images/ssLogo.png')}/> */}
                        <div className="cardImage" style={{backgroundImage: `url(${dumpBackground})`}}></div>
                        <h2>The Dump</h2>
                    </a>
                    <a href="https://www.classichome.com/" target="_blank" className="llCard"  onClick={BgChangeCat}>
                        {/* <img alt="Caterpillar Logo" className="logo" src={require('../../Images/CatLogo.png')}/> */}
                        <div className="cardImage" style={{backgroundImage: `url(${chBackground})`}}></div>
                        <h2>Classic Home</h2>
                    </a>
                </div> 
            </div>
            
        </div>
        
    )
}