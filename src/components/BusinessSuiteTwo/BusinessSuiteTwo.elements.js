import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#09160F')};
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 33.33%;
  display: flex;
  justify-content: center;
  width: 280px;
  text-decoration: none;
  border-radius: 4px;
  padding: 40px;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
  
  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PricingCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  margin-bottom: 16px;
`;

export const ScaleImg = styled.img`
 
  /* Other styles */
  padding-right: 0;
  border: 0;
  max-width: 100%;  /* Ensures the image doesn't overflow the container */
  max-height: 100px;  /* Sets a maximum height */
  margin-bottom: 16px;
`;

export const ImgCenter = styled.div`
  /* Centering (both horizontally and vertically) */
  display: flex; /* Makes the image a flex item for centering */
  align-items: center; /* Aligns the image vertically within the container */
  justify-content: center; /* Aligns the image horizontally within the container */

  
`;

export const SabzlandImg = styled.img`
  
  padding-left: 10px;
  border: 0;
  max-width: 200px;
  max-height: 100px;
  margin-bottom: 24px;
  @media (min-width: 480px) and (max-width: 1200px) {
    
    margin-bottom: 24px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 12px;
    margin-bottom: 12px;
  }
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  padding-left: 0px;
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 600;
`;

export const TopHeading = styled.h1`
  padding-left: 0px;
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#E2BF66' : '#fff')};
`;

export const Subtitle = styled.p`
  text-align: center;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;
export const TestimonialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row';
`;

export const TestimonialColumn = styled.div`
  margin-bottom: 0px;
`;

export const TesLine = styled.div`
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 25px;
  padding-left: 20px;
`;
export const TDLine = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 8px;
  padding-left: 20px;
`;
// export const LMButtom = styled.div`
//   border-radius: 4px;
//   background-color: #2A3D32;
//   color: #fff;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     background-color: '#2A3D32';
//   }
//   display: flex;
//   justify-content: space-between;
//   @media screen and (max-width: 960px) {
//     width: 100%;
//   }
//   `;

  const primaryColor = '#2A3D32';
const textColor = '#fff';

export const LMButtom = styled.div`
  width: 30%;
  background-color: ${primaryColor};
  color: ${textColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px 20px; /* Added padding */
  display: flex;
  justify-content: space-between;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${textColor}; /* Swap colors on hover */
    color: ${primaryColor};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Button shadow */
  }
`;