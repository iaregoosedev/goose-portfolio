import "../OSFPage/osfPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import {motion as m} from "framer-motion";

export default function OSFPage() {
    return (
        <m.div className="osfPage"
        // exit={{y: "200vh", transition:{duration: .1}}}
        >
            <ScrollToTop/>
            <m.div className="osfHero"
            exit={{opacity: 0, transition:{duration: .1}}}
            >
                
            </m.div>
        </m.div>
    )
}