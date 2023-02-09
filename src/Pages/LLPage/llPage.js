import "../SSPage/ssPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import Footer from "../../Components/Footer/footer"
import LLHero from "../../Components/LLHero/llHero";
import Navbar from "../../Components/Navbar/navbar";

export default function LLPage() {
    return (
        <div className="ssPage">
            <ScrollToTop/> 
            <Navbar state="none" pageName="Luminos Labs"/>
            <LLHero/>
            <Footer/>
        </div>
    )
}