import "../OSFPage/osfPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import OsfHero from "../../Components/OSFHero/osfHero";
import OSFDesigns from "../../Components/OSFDesignCarousel/osfDesigns";
import Navbar from "../../Components/Navbar/navbar";

export default function OSFPage() {
    return (
        <div className="osfPage">
            <ScrollToTop/>
            <Navbar state="none" pageName="OSF"/> 
            <OsfHero/>
            <OSFDesigns/>
        </div>
    )
}