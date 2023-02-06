import React from "react"
import Buttin from "../Buttin/buttin";
import "./lwc.css"
import Carousel from 'react-grid-carousel'
import {motion as m} from "framer-motion";
import {Link as LinkS} from "react-scroll"

export default function LWC(props) {
    const {title, description, lwcImage, btnLabel, image, url, part, altText} = props;
    if (image == "right") {
        return (
            <m.div className="lwc"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
                <div className="row lwcContainer">
                    <div className="col-lg-6 ps-0 lwcText">
                        <h1 className="lwcTitle">{title}</h1>
                        <p>{description}</p>
                        <a href={url} target="_blank">
                            <Buttin>{btnLabel}</Buttin>
                        </a>
                    </div>
                    <div className="col-lg-6 pe-0 lwcImgContainer">
                        <img alt={altText} className="lwcImg" src={lwcImage}></img>
                    </div>
                </div>
            </m.div>
        )
    }
    else if (image == "left") {
        return (
            <m.div className="lwc"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
                <div className="row lwcContainer">
                    <div className="col-lg-6 ps-0 lwcImgContainer">
                        <p>{part}</p>
                        <img alt={altText} className="lwcImg" src={lwcImage}></img>
                    </div>
                    <div className="col-lg-6 pe-0 lwcText">
                        <h1 className="lwcTitle">{title}</h1>
                        <p>{description}</p>
                        <a href={url} target="_blank">
                            <Buttin>{btnLabel}</Buttin>
                        </a>
                    </div>
                </div>
            </m.div>
        )
    }
    else if (image == "leftNo") {
        return (
            <m.div className="lwc"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
                <div className="row lwcContainer">
                    <div className="col-lg-6 ps-0 lwcImgContainer">
                        <p>{part}</p>
                        <img alt={altText} className="lwcImg" src={lwcImage}></img>
                    </div>
                    <div className="col-lg-6 pe-0 lwcText">
                        <h1 className="lwcTitle">{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </m.div>
        )
    }
    else {
        return (
            <m.div className="lwcCat"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
                <div className="row lwcWidth">
                    <div className="col-lg-6 ps-0 lwcText">
                        <p>{part}</p>
                        <h1 className="lwcTitle">{title}</h1>
                        <p>{description}</p>
                        <a href={url} target="_blank">
                            <LinkS to="lwc" spy={true} smooth={true} duration={100}>
                                <Buttin>{btnLabel}</Buttin>
                            </LinkS>
                        </a>
                    </div>
                    <div className="col-lg-6 pe-0 lwcImgContainer">
                        <Carousel cols={1} rows={1} loop>
                            <Carousel.Item>
                                <img alt={altText} className="osfDesignImg" src={require('../../Images/CatPage/CreateAccount.png')}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt={altText} className="osfDesignImg" src={require('../../Images/CatPage/AccountLinking.png')}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt={altText} className="osfDesignImg" src={require('../../Images/CatPage/Dashboard.png')}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </m.div>
        )
    }
    
} 