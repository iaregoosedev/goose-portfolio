import "../HomePage/homepage.css"
import AboutMe from "../../Components/AboutMe/aboutMe.js";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Hero from "../../Components/Hero/hero";
import PorfolioGallery from "../../Components/PortfolioGallery/portfolioGallery";
import Resume from "../../Components/Resume/Resume";
import {motion as m} from "framer-motion";

export default function Homepage() {
    return (
        <div className="homepage">
            {/* <Header/> */}
            <Hero id="hero"/>
            <AboutMe id="aboutMe"/>
            <PorfolioGallery id="portfolioGallery"/>
            <Resume id="resume"/>
            <Footer/>
            <m.div className="slider"
            // initial={{transform: "translateY(100vh)"}}
            animate={{transform: "translateY(100vh)", transition:{duration: .3}}}
            exit={{transform: "translateY(0vh)", transition:{duration: .3}}}
            >
                <div className="slideImg" id="slideBg"></div>
            </m.div>
        </div>
    )
    
}