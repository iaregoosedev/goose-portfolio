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
                    <div className='p-0 mb-5 contact contactText'>
                        <a className='col-lg-6 email' href = "mailto: jasonwbessett@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-3 bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                            <h4>jasonwbessett@gmail.com</h4>
                        </a>
                        <br/>
                        <a className='col-lg-6 phone' href='tel: 815-901-6344'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-3 bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <h4>815-901-6344</h4>
                        </a>
                    </div>
                    <div className="col-lg-6 ps-0 contactText">
                        <div className="thankYou" ref={thnakRef}>
                            <h1 className='lwcTitle'>Thank you!</h1>
                            <p>I can't wait to chat!</p>
                        </div>
                        <div className="form" ref={formRef}>
                            <div className='contactTitle'>
                                <h1>Connect via G<small>oose</small>Mail<p>(im sorry)</p></h1>
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