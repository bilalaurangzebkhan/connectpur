import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, InnerRow, Heading, Subtitle, ImgWrapper, Img, Divider, TextOne, 
  InnerColumn, TextTwo} from './Sustainable.elements';
import { Container } from '../../globalStyles'
 const Sustainable = ({ 
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart,
    start,
    textOne,
    textTwo,
    textThree,
    textFour
}) => {
    return (
        <>
        <InfoSec lightBg={lightBg}>
          <Container>
            <InfoRow imgStart={imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                  <InnerRow>
                    <InnerRow>
                      <Divider/>
                      <InnerColumn>
                        {/* <Heading lightText={lightText}>{headline}</Heading> */}
                        <TextOne lightTextDesc={lightTextDesc}>{textOne}</TextOne>
                        <TextTwo lightTextDesc={lightTextDesc}>{textTwo}</TextTwo>
                      </InnerColumn>
                    </InnerRow>
                    <InnerRow>
                      <Divider/>
                      <InnerColumn>
                        {/* <Heading lightText={lightText}>{headline}</Heading> */}
                        <TextOne lightTextDesc={lightTextDesc}>{textThree}</TextOne>
                        <TextTwo lightTextDesc={lightTextDesc}>{textFour}</TextTwo>
                      </InnerColumn>
                    </InnerRow>
                  </InnerRow>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
        </>
    )
}

export default Sustainable;
