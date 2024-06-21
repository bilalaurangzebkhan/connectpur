import styled from 'styled-components';

export const Wrap = styled.div({
  background: '#09160F',
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#09160F')};
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  
  flex-direction: row;
  @media (min-width: 480px) and (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 45%;
  flex-basis: 50%;
  
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

export const ContentWrap = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600; 
`;

export const HeadingOne = styled.h1`
  margin-bottom: 5px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100; 
`;

export const HeadingTwo = styled.h1`
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
`;

export const GParagraph = styled.p`
  color: #5CDB95;
  max-width: 440px;
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 18px;
  line-height: 24px;
`;

export const Button = styled.button({
  marginTop: '20px',
});

export const CardWrap = styled.div({
  height: '365px',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',

  '@media (min-width: 800px) and (max-width: 1200px)': {
    height: '450px',
    width: '70%',
  },

  '@media (min-width: 480px) and (max-width: 800px)': {
    height: '350px',
    width: '70%',
  },
  
  '@media (min-width: 380px) and (max-width: 480px)': {
    height: '265px',
  },
  '@media (min-width: 330px) and (max-width: 380px)': {
    height: '230px',
  },
  '@media (min-width: 220px) and (max-width: 330px)': {
    height: '190px',
  },
});
