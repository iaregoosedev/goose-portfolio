import "./llHero.css";
import llLogo from "../../Images/LLLogo.png"

export default function LLHero() {
    return (
        <div className="llHero">
            <div className="col-6 textLogo">
                <img className="logo" src={llLogo}></img>
                <div className="">

                </div>
            </div>
            <div className="col-6 image">

            </div>
        </div>
    )
}