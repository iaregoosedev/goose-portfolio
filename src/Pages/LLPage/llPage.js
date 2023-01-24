import "../LLPage/llPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import {motion as m} from "framer-motion";

export default function LLPage() {
    return (
        <m.div className="llpage"
        // exit={{y: "200vh", transition:{duration: .1}}}
        >
            <ScrollToTop/>
            <m.div className="llHero"
            exit={{opacity: 0, transition:{duration: .1}}}
            >
                
            </m.div>
        </m.div>
    )
}