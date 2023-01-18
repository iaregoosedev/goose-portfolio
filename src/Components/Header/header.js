import "../Header/header.css"
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
                    <li><h6 className="m-0">About Me</h6></li>
                    <li><h6 className="m-0">Portfolio</h6></li>
                    <li><h6 className="m-0">Resume</h6></li>
                    <li><h6 className="m-0">Contact Me</h6></li>
                </ul>
            </div>
        </div>
    )
}