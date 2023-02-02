import "./catHero.css";
import catLogo from "../../Images/CatLogo.png"
import catBackground from "../../Images/CatBackground.jpg"
import Buttin from "../Buttin/buttin.js"
import {Link as LinkS} from "react-scroll"

import {motion as m} from "framer-motion";

export default function CATHero() {
    return (
        <div className="catHero" style={{backgroundImage: `url(${catBackground})`}}>
            <m.div className="row catHeroContainer"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
               <div className="col-6 textLogo">
                    <div className="col-12" style={{textAlign: 'center', maxHeight: "300px"}}>
                        <img className="catLogo" src={catLogo}></img>
                    </div>
                    <div className="text">
                        <h1 className="pageTitle">Caterpillar Design Challenge</h1>
                        <br/>
                        <p>
                        The Caterpillar Design Challenge was an opportunity where I was asked to help redesign Caterpillars dealership website. This challenge had two parts. PART ONE entailed looking at the original design and freshen it up.
                        </p>
                    </div>
                    <br/>
                    <div className="col-12" style={{textAlign: 'center', maxHeight: "300px"}}>
                        <img className="catImage" src={require("../../Images/CatPage/Dash1.png")}></img>
                    </div>
                </div>
                <div className="col-6 rightText">
                    <div className="col-12" style={{textAlign: 'center'}}>
                        <img className="catImage" src={require("../../Images/CatPage/IMG_5905.png")}></img>
                    </div>
                    <br/>
                    <p>
                    In PART TWO of the challenge, I and the rest of the User Experience Design students from Bradley University were invited to Caterpillar Headquarters in Peoria, IL to work with their UX team on a hypothetical 100 floor building elevator design.
                    </p>
                    <LinkS to="lwc" spy={true} smooth={true} duration={100}>
                        <Buttin>Part One</Buttin>
                    </LinkS>
                </div> 
            </m.div>
        </div>
    )
}