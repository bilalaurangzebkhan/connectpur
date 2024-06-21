import { useState} from 'react';
import {InfoSec, InfoRow, InfoColumn, ContactRow, ContactColumn, TopHeading, ErrPosition, TextWrapper, Heading, ScaleImg, ErrMessage, Subtitle, ButtonPosition, InputField, TextCenter } from './Contact.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { PiNavigationArrowFill } from "react-icons/pi";

 const Contact = ({ 
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headingTopOne,
    headingTopTwo,
    headlineOne,
    headlineTwo,
    headlineThree,
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    imgStart,
    start,

}) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
  
    const submitForm = async () => {
  
        if (firstname === "" || lastname === "" || phonenumber === "" || email === "" || message === "") {
            setStatus("Fields are missing!")
            return
        }
    
        if (!email.includes('@')){
            setStatus("Invalid email")
            return
        }
        // url
        const URL = "https://api.sabzland.com/contact/Contactform";
    
        const config = {
            method: 'POST',
            body: JSON.stringify ({
            firstname,
            lastname,
            email,
            phonenumber,
            message
            }),
            headers: { 'Content-Type' : 'application/json'}
        }
        
        const response = await fetch(URL, config)
        const data = await response.text()
        //console.log(response.text())
        setStatus(data)
    }

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>

                    <InfoRow imgStart={imgStart}>
                        
                        <InfoColumn>
                            <TextWrapper>
                                <Heading lightText={lightText}>Address</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>Technology Park, Pak Austria Fachhochschule IAST, Haripur</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading lightText={lightText}>Contact</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>Mobile: (+92) 3255419051</Subtitle>
                                <Subtitle lightTextDesc={lightTextDesc}>Mail: contact@sabzland.com</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading lightText={lightText}>Supporting Hours</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>Monday-Friday: 9:00 AM - 6:00 PM</Subtitle>
                                <Subtitle lightTextDesc={lightTextDesc}>Saturday-Sunday: 9:00 AM - 2:00 PM</Subtitle>
                                </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
                <Container>
                    <TextCenter>
                        <TextWrapper>
                            <Subtitle>Team Sabzland would love to hear from you. You can email or use the contact form, and we'll get back to you as soon as possible.</Subtitle>
                        </TextWrapper>
                    </TextCenter>

                    <ContactRow>
                        <ContactColumn>
                            <InputField id="firstname" type="text" placeholder='First Name *' onChange={(event) => setFirstname(event.target.value)}/>
                        </ContactColumn>

                        <ContactColumn>
                            <InputField id="lastname" type="text" placeholder='Last Name *' onChange={(event) => setLastname(event.target.value)}/>
                        </ContactColumn>

                        <ContactColumn>
                            <InputField id="phonenumber" type="tel" placeholder='Phone Number *' onChange={(event) => setPhonenumber(event.target.value)}/>
                        </ContactColumn>
                    </ContactRow>
                    
                    <ContactRow>
                        <ContactColumn>
                            <InputField id="email" type="email" placeholder='Email *' onChange={(event) => setEmail(event.target.value)}/>
                        </ContactColumn>

                        <ContactColumn>
                            <InputField id="message" type="text" placeholder='Your Message *' onChange={(event) => setMessage(event.target.value)}/>
                        </ContactColumn>
                    </ContactRow>
                    
                    <ContactRow>
                        <ErrPosition>
                            <ErrMessage>{status}</ErrMessage>
                        </ErrPosition>
                    </ContactRow>

                    <ContactRow>
                        <ButtonPosition>
                            <Button learnmore={true} onClick={submitForm}>
                                <PiNavigationArrowFill className="button-icon" size={18} />
                                Submit
                            </Button>
                        </ButtonPosition>
                    </ContactRow>

                </Container>
               
                                
            </InfoSec>
        </>
    )
}

export default Contact;
