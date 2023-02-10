import "../Resume/Resume.css"
import React from "react"
import Buttin from "../Buttin/buttin.js"
import ResumeImg from "../../Images/Resume_2023.png"

export default function Resume() {
    return (
        <div className="resume">
            <div className="resumeContainer row gx-6">
                <div className="col-lg-6 aboutRight ps-0">
                    <h6 className="resDesk" style={{color: '#dd9510'}}>RESUME</h6>
                    <img alt="Resume Image" className="resumeImg" src={require('../../Images/Resume_2023.png')}/>
                </div>
                <div className="col-lg-6 aboutLeft pe-0">
                    <h6 className="resMob" style={{color: '#dd9510'}}>RESUME</h6>
                    <h2>Please feel free to download my resume</h2>
                    <a href={require('../../Data/bessettJason_resume_2023.pdf')} download="Bessett_Resume"><Buttin>Download and View</Buttin></a>
                </div>
            </div>
        </div>
    )
}