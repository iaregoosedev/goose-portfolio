import "../CATPage/catPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import OSFDesigns from "../../Components/OSFDesignCarousel/osfDesigns";
import CATHero from "../../Components/CATHero/catHero";
import LWC from "../../Components/LWC/lwc";
import meTalk from "../../Images/CatPage/MeTalk.png"
import Footer from ".././../Components/Footer/footer.js"

export default function CATPage() {
    return (
        <div className="osfPage">
            <ScrollToTop/> 
            <CATHero/>
            <br/>
            <br/>
            <LWC part="Part One" title="Dealership website refresh" description="In this part of the challenge, we were tasked with making it easier for customers to make their way through the sign in process easier and to navigate the dashboard with ease. Here are some of the mock ups we presented to Caterpillar." btnLabel="Part Two"/>
            <LWC part="Part Two" image="leftNo" title="CAT HQ Presentations" description="In this part of the challenge, we visited Caterpillars headquarters in Peoria, IL to participate in a challenge to design a hypothetical elevator that would occupy a 100 floor skyscraper. We spent half of our time there working with the UX team there, and the other half presenting our website designs to the UX team." lwcImage={meTalk}/>
            <Footer/>
        </div>
    )
}