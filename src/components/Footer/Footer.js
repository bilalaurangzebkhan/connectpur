import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  SocialText,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  FooterLogoContainer,
  WebsiteRights,
  FooterLogo,
  SocialIconLink,
  Img,
  SustainableImg
} from './Footer.elements';

function Footer() {

  const date = new Date();
  const message = 'Your Message Here';
  return (
    <FooterContainer>
      <SustainableImg src={require('../../images/topsustainablecompany.png')} alt="Sabzland Top Sustainable Company"  />
      <FooterLogoContainer>
        <FooterLogo to='/'>
          <Img src={require('../../images/sabzland-footer.png')} alt="Sabzland"  />
      </FooterLogo>
      </FooterLogoContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
            <FooterLink to='/connectpur'>Agriculture & Supply Chain</FooterLink>
            <FooterLink to='/sabzlandsuite'>Business Solutions</FooterLink>
            {/* <FooterLink to='/contact'>Updates</FooterLink> */}
            <FooterLink to='/contact'>Contact Us</FooterLink>
            {/* <FooterLink to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@sabzland.com' target="_blank" rel="noopener noreferrer">Contact Us</FooterLink> */}
            <FooterLink to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=job@sabzland.com' target="_blank" rel="noopener noreferrer">Jobs</FooterLink>
            <FooterLink to='/privacypolicy'>Privacy Policy</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <SocialIconLink to='https://www.linkedin.com/company/sabzland/' target="_blank" rel="noopener noreferrer">
              {/* <FaLinkedin size={20} />  */}
              <SocialText>LinkedIn</SocialText>
            </SocialIconLink>
            <SocialIconLink to='https://www.facebook.com/sabzlandtechnologies' target="_blank" rel="noopener noreferrer">
              {/* <FaFacebook size={20} />  */}
              <SocialText>Facebook</SocialText>
            </SocialIconLink>
            <SocialIconLink to='https://www.instagram.com/sabzlandtechnologies' target="_blank" rel="noopener noreferrer">
              {/* <FaInstagram size={20} />  */}
              <SocialText>Instagram</SocialText>
            </SocialIconLink>
            <SocialIconLink to='https://x.com/Sabzland_' target="_blank" rel="noopener noreferrer">
              {/* <FaTwitter size={20}/>  */}
              <SocialText>Twitter</SocialText>
            </SocialIconLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <WebsiteRights>SabzlandTechnologies Pvt Limited © {date.getFullYear()} </WebsiteRights>
    </FooterContainer>
  );
}

export default Footer;