import Button from "../button/button";
import Styles from "./contactForm.module.css"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState ("test");
    const [email, setEmail] = useState ("test");
    const [text, setText] = useState ("test");


    const onSubmit = (event) => {
        event.preventDefault();
        setName (event.target[0].value);
        setEmail (event.target[1].value);
        setText (event.target[2].value);
        console.log (name, email, text);
    };

    return(
        <section className={Styles.container}>
            <div className={Styles.Contact_form}>
                <div className={Styles.top_button}>
                    <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize="24px"/>}/>
                    <Button text = "VIA CALL" icon = {<FaPhoneAlt fontSize="24px"/>}/>
                </div>
                <div className={Styles.email_btn}>
                    <Button
                        isEmail={true}
                        text="VIA EMAIL FORM"
                        icon={<HiMail fontSize="24px" />}
                    />
                    <br/>
                    <form onSubmit={onSubmit}>
                        <div className={Styles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name"></input>
                        </div>
                        <div className={Styles.form_control}>
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" name="email"></input>
                        </div>
                        <div className={Styles.form_control}>
                            <label htmlFor="text">TEXT</label>
                            <textarea name="text" rows="8"></textarea>
                        </div>
                        <div Style={{
                            display:"flex",
                            justifyContent: "end",
                        }}>
                            <Button text="SUBMIT"/>
                        </div>
                        <div>{name + " " + email + " " + text} </div>
                    </form>
                </div>
            </div>
            <div className={Styles.contact_image}>
                <img src="/images/service24-7.png" alt="contact_img"></img>
            </div>
        </section>
    );
};


export default ContactForm