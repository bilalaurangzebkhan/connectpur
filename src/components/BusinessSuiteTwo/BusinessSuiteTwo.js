import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TopHeading, TextWrapper, ScaleImg, Heading, Subtitle, ImgCenter } from './BusinessSuiteTwo.elements';
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { PiCommandBold } from 'react-icons/pi';
 const BusinessSuiteTwo = ({ 
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
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                <InfoRow>
                    <TopHeading>{headingTopOne} </TopHeading>
                    <TopHeading style={{ paddingLeft: '10px' }}  lightText={lightText}> {headingTopTwo}</TopHeading>
                </InfoRow>
                    <InfoRow imgStart={imgStart}>
                        
                        <InfoColumn>
                            <TextWrapper>
                                {/* <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine> */}
                                <Heading lightText={lightText}>{headlineOne}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                                {/* <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine> */}
                                <Heading lightText={lightText}>{headlineTwo}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                                {/* <Link style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }} to='/contact'>
                                    <Button learnmore={primary}>
                                        <PiCommandBold className="button-icon" size={18} />
                                        {buttonLabel}
                                    </Button>
                                </Link> */}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                                {/* <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine> */}
                                <ImgCenter>
                                    <ScaleImg src={require('../../images/scales.png')} alt="Sabzland Suite"  />
                                </ImgCenter>
                                <Subtitle lightTextDesc={lightTextDesc}>{descriptionThree}</Subtitle>
                                </TextWrapper>
                        </InfoColumn>
                        {/* <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn> */}
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default BusinessSuiteTwo;
