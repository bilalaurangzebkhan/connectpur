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
  color: ${({ lightText }) => (lightText ? '#5CDB95' : '#5D5C61')};
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
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

export const CardWrap = styled.div({
  height: '400px',
  maxWidth: '555px',
  display: 'flex',
  justifyContent: 'flex-end',

  '@media (min-width: 480px) and (max-width: 1200px)': {
    height: '535px',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
  },
  
  '@media (min-width: 320px) and (max-width: 480px)': {
    height: '535px',
    display: 'flex',
    justifyContent: 'center',
  },
});

// export const CardWrap = styled.div`
//   max-width: 555px;
//   display: flex;
//   justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
// `;