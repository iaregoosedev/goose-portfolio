import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../ContactMe/contactMe.css"
import {motion as m} from "framer-motion";
import Buttin from '../Buttin/buttin';

export const ContactMe = (props) => {
    const thnakRef = useRef();
    const formRef = useRef();
    const switchContact = () => {
        thnakRef.current.classList.toggle("thankYou");
        formRef.current.classList.toggle("thankYou");
    }

    const {lwcImage, title, description} = props;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_fjug70b', 'template_vlj77pp', form.current, '3tX4iyuSkabhXWbtA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <m.div className="contactMe"
            initial={{opacity: 0, transition:{duration: .1}}}
            animate={{opacity: 1, transition:{duration: .2}}}
            exit={{opacity: 0, transition:{duration: .2}}}>
                <div className="row contactContainer">
                    <div className="col-lg-6 ps-0 contactText">
                        <div className="thankYou" ref={thnakRef}>
                            <h1 className='lwcTitle'>Thank you!</h1>
                            <p>I can't wait to chat!</p>
                        </div>
                        <div className="form" ref={formRef}>
                            <div className='contactTitle'>
                                <h1>Connect via G<small>oose</small>Mail<p>im sorry</p></h1>
                            </div>
                            <form ref={form} onSubmit={sendEmail}>
                                {/* <label>Name</label> */}
                                <input label="Name" placeholder='Name' type="text" name="user_name" />
                                <br/>
                                {/* <label>Email</label> */}
                                <input label="Email" placeholder='Email' type="email" name="user_email" />
                                <br/>
                                {/* <label>Message</label> */}
                                <textarea label="Message" placeholder='Message' name="message" />
                                <br/>
                                <Buttin type="submit" value="Send" onClick={switchContact}>Send</Buttin>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 pe-0 contactImgContainer">
                        <img alt='Goose Gif' className="contactImg" src={lwcImage}></img>
                    </div>
                </div>
            </m.div>
    
  );
};