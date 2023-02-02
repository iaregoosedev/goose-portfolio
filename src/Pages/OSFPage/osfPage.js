import "../OSFPage/osfPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import OsfHero from "../../Components/OSFHero/osfHero";
import OSFDesigns from "../../Components/OSFDesignCarousel/osfDesigns";

export default function OSFPage() {
    return (
        <div className="osfPage">
            <ScrollToTop/> 
            <OsfHero/>
            <OSFDesigns/>
        </div>
    )
}