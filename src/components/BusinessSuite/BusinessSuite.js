import React from 'react'
import {InfoSec, InfoRow, InfoColumn, MiddleColumn,TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, Divider, TestimonialRow,
    TesLine,TestimonialColumn,TDLine,SabzlandImg,TestimonialImg } from './BusinessSuite.elements';
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { PiCommandBold } from 'react-icons/pi';
 const BusinessSuite = ({ 
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    descriptionOne,
    descriptionTwo,
    buttonLabel,
    imgone,
    imgtwo,
    alt,
    imgStart,
    start,
    testimonialimgOne,
    testimonialCompany,
    testimonialDesignation,
    testimonialName,

}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <InfoRow imgStart={imgStart}>
                            <SabzlandImg src={imgtwo} />
                            <Heading lightText={lightText}>{headline}</Heading>
                            </InfoRow>
                            <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                            <Link style={{ textDecoration: 'none' }} to='/sabzlandsuite'>
                            <Button learnmore={primary}>
                                <PiCommandBold className="button-icon" size={18} />
                                {buttonLabel}
                            </Button>
                            </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <MiddleColumn><Divider/></MiddleColumn>
                        <InfoColumn>
                            <TextWrapper>
                                <Img src={imgone} />
                                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                                <TestimonialRow>
                                    <TestimonialColumn>
                                        <TestimonialImg src={testimonialimgOne} alt={alt} />
                                    </TestimonialColumn>
                                    <TestimonialColumn>
                                        <TesLine lightTopLine={lightTopLine}>{testimonialName}</TesLine>
                                        <TDLine lightTopLine={lightTopLine}>{testimonialDesignation}</TDLine>
                                        <TDLine lightTopLine={lightTopLine}>{testimonialCompany}</TDLine>
                                    </TestimonialColumn>
                                </TestimonialRow>
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

export default BusinessSuite;
