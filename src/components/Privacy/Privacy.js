import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, UnorderedList, ListItem} from './Privacy.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

 const Privacy = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading>Sabzland Privacy Policy</Heading>
                            <Heading>Introduction</Heading>
                            <Subtitle>This statement outlines your rights to your personal information and contains general principles that apply to the handling of your personal information when you use any of Sabzland products or services, website and our mobile application.</Subtitle>
                            <Heading>Sabzland’s commitment to your privacy</Heading>
                            <Subtitle>Sabzland's one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Sabzland and how we use it.</Subtitle>
                            <Subtitle>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</Subtitle>
                            <Subtitle>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Sabzland. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.</Subtitle>
                            <Heading>Consent</Heading>
                            <Subtitle>By using our products, you hereby consent to our Privacy Policy and agree to its terms.</Subtitle>
                            <Heading>Information we collect</Heading>
                            <Subtitle>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Subtitle>
                            <Subtitle>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Subtitle>
                            <Subtitle>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Subtitle>
                            <Heading>How we use your information</Heading>
                            <UnorderedList>
                                <Subtitle>We use the information we collect in various ways, including to:</Subtitle>
                                <ListItem>Provide, operate, and maintain our website.</ListItem>
                                <ListItem>Improve, personalize, and expand our website.</ListItem>
                                <ListItem>Understand and analyze how you use our website.</ListItem>
                                <ListItem>Develop new products, services, features, and functionality.</ListItem>
                                <ListItem>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates.</ListItem>
                                <ListItem>Other information relating to the website, and for marketing and promotional purposes.</ListItem>
                                <ListItem>Send you emails.</ListItem>
                                <Subtitle>Atlast, find and prevent fraud.</Subtitle>
                            </UnorderedList>
                            <Heading>Privacy and confidentiality</Heading>
                            <Subtitle>We believe that all of our customers should be able to trust Sabzland with their personal and financial information which is why we apply the following key privacy principles in which we operate:</Subtitle>
                            <UnorderedList>
                                <ListItem>This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. This Privacy Policy also explains the steps we have taken to secure your personal information. Finally, this Privacy Policy explains your options regarding the collection, use and disclosure of your personal information. By visiting the Site directly or through another site, you accept the practices described in this Policy.</ListItem>
                                <ListItem>Data protection is a matter of trust and your privacy is important to us. We shall therefore only use your name and other information which relates to you in the manner set out in this Privacy Policy. We will only collect information where it is necessary for us to do so and we will only collect information if it is relevant to our dealings with you.</ListItem>
                                <ListItem>We will only keep your information for as long as we are either required to by law or as is relevant for the purposes for which it was collected.</ListItem>
                                <ListItem>We will cease to retain your personal data, or remove the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purposes for which the personal data was collected, and is no longer necessary for any legal or business purpose.</ListItem>
                                <ListItem>You can visit the Site and browse without having to provide personal details. During your visit to the Site you remain anonymous and at no time can we identify you unless you have an account on the Site and log on with your user name and password.</ListItem>
                            </UnorderedList>
                            </TextWrapper>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Privacy;