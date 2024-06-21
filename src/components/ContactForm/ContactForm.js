import { useState} from 'react';
import {InfoSec, InfoRow, InfoColumn, ErrPosition, TextWrapper, ScaleImg, ErrMessage, Subtitle, ButtonPosition, InputField, TextCenter } from './ContactForm.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { PiNavigationArrowFill } from "react-icons/pi";

 const ContactForm = ({ 
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
                    <TextCenter>
                        <TextWrapper>
                            <Subtitle>Team Sabzland would love to hear from you. You can email or use the contact form, and we'll get back to you as soon as possible.</Subtitle>
                        </TextWrapper>
                    </TextCenter>

                    <InfoRow>
                        <InfoColumn>
                            <InputField id="firstname" type="text" placeholder='First Name *' onChange={(event) => setFirstname(event.target.value)}/>
                        </InfoColumn>

                        <InfoColumn>
                            <InputField id="lastname" type="text" placeholder='Last Name *' onChange={(event) => setLastname(event.target.value)}/>
                        </InfoColumn>

                        <InfoColumn>
                            <InputField id="phonenumber" type="tel" placeholder='Phone Number *' onChange={(event) => setPhonenumber(event.target.value)}/>
                        </InfoColumn>
                    </InfoRow>
                    
                    <InfoRow>
                        <InfoColumn>
                            <InputField id="email" type="email" placeholder='Email *' onChange={(event) => setEmail(event.target.value)}/>
                        </InfoColumn>

                        <InfoColumn>
                            <InputField id="message" type="text" placeholder='Your Message *' onChange={(event) => setMessage(event.target.value)}/>
                        </InfoColumn>
                    </InfoRow>
                    
                    <InfoRow>
                        <ErrPosition>
                            <ErrMessage>{status}</ErrMessage>
                        </ErrPosition>
                    </InfoRow>

                    <InfoRow>
                        <ButtonPosition>
                            <Button learnmore={true} onClick={submitForm}>
                                <PiNavigationArrowFill className="button-icon" size={18} />
                                Submit
                            </Button>
                        </ButtonPosition>
                    </InfoRow>

                </Container>
            </InfoSec>
        </>
    )
}

export default ContactForm;
