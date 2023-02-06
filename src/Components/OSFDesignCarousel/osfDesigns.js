import "./osfDesigns.css"
import React from 'react'
import Carousel from 'react-grid-carousel'
import {motion as m} from "framer-motion";

export default function OSFDesigns (){
    return (
        <div className="osfDesigns">
            <m.div className="osfDesignsContainer"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}
            >
                <h5 style={{color: '#dd9510'}}>FINAL DESIGNS</h5>
                <div className="osfCarouselContainer">
                    <Carousel cols={4} rows={1} gap={8} loop>
                        <Carousel.Item>
                            <img alt="Splash Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/SPLASH.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Login Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGIN.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Home Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/HOME.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Log Pain 1 Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGPAIN1.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Log Pain 2 Screen" src={require('../../Images/OSFDesigns/LOGPAIN3.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Log Pain 3 Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGPAIN4.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Settings Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/SETTINGS.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="New Session Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/NEW_SESSION.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Follow Options Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/FOLLOW_OPTIONS.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Guide Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/GUIDED.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Complete Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/COMPLETE.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Education Screen" className="osfDesignImg" src={require('../../Images/OSFDesigns/Education.png')}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </m.div>
        </div>
    )
}