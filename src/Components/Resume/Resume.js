import "../Resume/Resume.css"
import React from "react"
import Buttin from "../Buttin/buttin.js"
import ResumeImg from "../../Images/Resume_2023.png"

export default function Resume() {
    return (
        <div className="resume">
            <div className="resumeContainer row gx-6">
                <div className="col-6 aboutRight ps-0">
                    <h6 style={{color: 'orange'}}>RESUME</h6>
                    <img className="resumeImg" src={require('../../Images/Resume_2023.png')}/>
                </div>
                <div className="col-6 aboutLeft pe-0">
                    
                    <h2>Please feel free to download my resume</h2>
                    <Buttin>Download</Buttin>
                </div>
                
            </div>
            
        </div>
    )
}