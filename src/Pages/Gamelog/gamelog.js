import "../Gamelog/gamelog.css";
import { motion as m } from "framer-motion";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";

export default function Gamelog() {
  return (
    <div className="gamelog">
      <Navbar />
      <div className="mondayContainer">
        <iframe
          className="mondayIframe"
          src='https://view.monday.com/embed/6897085069-fca2d12bad496c1c5dcc53ee9ffdf92a?r=use1" style="border: 0; box-shadow: 5px 5px 56px 0px rgba(0,0,0,0.25);'
        />
      </div>
      <Footer />
      <m.div
        className="slider"
        // initial={{transform: "translateY(100vh)"}}
        animate={{
          transform: "translateY(100vh)",
          transition: { duration: 0.3 },
        }}
        exit={{ transform: "translateY(0vh)", transition: { duration: 0.3 } }}
      >
        <div className="slideImg" id="slideBg"></div>
      </m.div>
    </div>
  );
}
