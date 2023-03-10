import "../OSFPage/osfPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import OsfHero from "../../Components/OSFHero/osfHero";
import OSFDesigns from "../../Components/OSFDesignCarousel/osfDesigns";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";

export default function OSFPage() {
    return (
        <div className="osfPage">
            <ScrollToTop/>
            <Navbar state="none" pageName="OSF"/> 
            <OsfHero/>
            <OSFDesigns/>
            <Footer/>
        </div>
    )
}