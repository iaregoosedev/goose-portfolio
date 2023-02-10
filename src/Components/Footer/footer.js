import "../Footer/footer.css"
import { Link } from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import React from "react";

function getYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="col-lg-4">
                    <LinkS className="noActive" to="hero" spy={true} smooth={true} offset={-80} duration={100}>
                        <Link to={"/"}>
                            <h1 className="m-0 footText">Jason Bessett</h1>
                        </Link>
                    </LinkS>
                </div>
                <div className="col-lg-4 footLinks">
                    <Link to={"/LuminosLabs"}>
                        <h5 className="m-0 footText">Luminos Labs</h5>
                    </Link>
                    <Link to={"/OSF"}>
                        <h5 className="m-0 footText">OSF Posture App</h5>
                    </Link>
                    <Link to={"/7Summits"}>
                        <h5 className="m-0 footText">7Summits Internship</h5>
                    </Link>
                    <Link to={"/CAT"}>
                        <h5 className="m-0 footText">Caterpillar Design Challenge</h5>
                    </Link>
                </div>
                <div className="col-lg-4 contactLinks">
                    <div className="socialLinks">
                        <a className="col-6 socialLink" href="https://www.linkedin.com/in/jasonb-design/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                        <a className="col-6 socialLink" href="https://twitter.com/jason_bessett" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg> 
                        </a>
                    </div>
                    <a className='footEmail' href = "mailto: jasonwbessett@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-3 bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <p>jasonwbessett@gmail.com</p>
                    </a>
                    <a className='footPhone' href='tel: 815-901-6344'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-3 bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <p>815-901-6344</p>
                    </a>
                </div>
            </div>
            <span className="mt-4 m-0 copywrite">
                &copy;
                iAreGoose&nbsp;
                {getYear()}
            </span>
        </div>
    )
}