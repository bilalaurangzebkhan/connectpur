import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #09160F;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLogoContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  padding-top: 60px;
  padding-bottom: 50px;
  @media screen and (max-width: 820px) {
    padding-bottom: 0px;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 769px) {
    margin: 16px;
    padding: 10px;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLogo = styled(Link)`
margin-left: 16px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 16px;

  &:hover {
    color: #5CDB95;
    transition: 0.3s ease-out;
  }
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  padding-top: 35px;
`;

// export const FooterLogoContainer = styled.div`
//   width: 100%;
//   max-width: 1000px;
//   padding-top: 60px;
//   padding-bottom: 50px;
//   @media screen and (max-width: 820px) {
//     padding-bottom: 0px;
//   }
// `;

export const SocialIcons = styled(Link)`
  display: flex;
  width: 240px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #5CDB95;
    transition: 0.3s ease-out;
  }

`;

export const SocialText = styled.a`
  display: flex;
  color: #fff;
  font-size: 18px;
  width: 240px;
  &:hover {
    color: #5CDB95;
    transition: 0.3s ease-out;
  }
`;

export const SocialIconLink = styled(Link)`
  display: flex;
  color: #fff;
  margin-bottom: 16px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #5CDB95;
    transition: 0.3s ease-out;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 18px;
  &:hover {
    color: #5CDB95;
    transition: 0.3s ease-out;
  }
`;

export const Img = styled.img`
  max-width: 200px;
  vertical-align: middle;
  display: inline-block;
  max-height: 300px;
`;

export const SustainableImg = styled.img`
  max-width: 555px;
  vertical-align: middle;
  display: inline-block;
  max-height: 300px;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 355px;
  }
  @media (max-width: 320px) {
    max-width: 300px;
  }
`;