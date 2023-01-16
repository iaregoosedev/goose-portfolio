import "./../../Styles/header.css"
import Logo from "./../../Data/logo.js"

export default function Header() {
    return (
        <div className="header">
            <div className="headerRow">
                <div className="col-5 nameLogo">
                    <Logo/>
                    <h1 className="m-0 name">Jason Bessett</h1>
                </div>
                <ul className="col-7 navLinks">
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
    )
}