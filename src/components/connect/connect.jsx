import React, { useRef } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import emailjs from '@emailjs/browser';
import './connect.css';



const Connect = () => {

    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        console.log('testing');
        let parameters = {
            from_name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            message: document.getElementById("description").value
        }

        emailjs.send(
            'service_bc7yiqp',
            'template_ipcw8xh',
            parameters,'Wgv3jZbWt6cn3W7-z'
          ).then(alert("email send"));
      
        e.target.reset();
    };

    const connectData = [
        {
            id: 1,
            logo: <RiMailSendLine />,
            title: "Email",
            context: "dinesh.ykbf53@gmail.com",
            link: 'mailto:dinesh.ykbf53@gmail.com'
        },
        {
            id: 2,
            logo: <IoLogoWhatsapp />,
            title: "Whatsapp",
            context: "+1 112-233-4455",
            link: "https://api.whatsapp.com/send?phone=+15736124299&text=Hello Dinesh, How are you?"
        }
    ]
    return (
        <section className="connects"  id='contact'>
            <h2 className="connect-getintouch">Get in touch</h2>
            <span className="contect-me">Contact Me</span>
            <div className="connect-container">
                <div className="connect-container1">
                    <div className="connect-talktome">Talk to me</div>
                    <div className="connect-blocks">
                        {connectData.map((item) => (
                            <div className="connect-block" key={item.id}>
                                <span className="item-logo">{item.logo}</span>
                                <div className="connect-text-block">
                                    <div className="connect-title">{item.title}</div>
                                    <div className="connect-context">{item.context}</div>
                                </div>
                                <div className="writeme-block">
                                <a  href={item.link} target='_blank' className="writeme">Write me{' '}</a> <FaArrowRightLong  className="arrow-icon"/>
                                </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
                <div className="connect-container2">
                        <div className="collaborate">Let's collaborate</div>
                        <div className="project-deatils">Write me your project</div>
                        <form ref={form} onSubmit={sendEmail} className="connect-form">
                            <div className="connect-name">
                                <label className="connect-name-label">Name</label>
                                <input className="connect-name-input" type="text" name="name" id="name" placeholder="Enter your name"/>
                            </div>
                            <div className="connect-mail">
                                <label className="connect-mail-label"> Mail</label>
                                <input type="email" className="connect-mail-input" name="email" id="email" placeholder="Enter your email"/>
                            </div>
                            <div className="connect-description">
                                <label className="connect-description-label">Description</label>
                                <textarea className="connect-description-input" name="description" id="description" cols="30" rows="5" placeholder="Share Your Idea/description"></textarea>
                            </div>
                            <button className="send-mail">Send Mail<TbSend className="sendicon"/></button>
                        </form>
                </div>
            </div>
        </section>
    )
}



export default Connect;