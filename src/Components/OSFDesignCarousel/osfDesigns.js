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
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/SPLASH.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGIN.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/HOME.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGPAIN1.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGPAIN3.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/LOGPAIN4.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/SETTINGS.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/NEW_SESSION.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/FOLLOW_OPTIONS.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/GUIDED.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/COMPLETE.png')}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="osfDesignImg" src={require('../../Images/OSFDesigns/Education.png')}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </m.div>
        </div>
    )
}