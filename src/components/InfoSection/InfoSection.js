import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { IoLogoGooglePlaystore } from "react-icons/io5";

const InfoSection = ({
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
    img,
    alt,
    imgStart,
    start,
    icon,
    button,
    linked
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                            <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                            <Link style={{ textDecoration: 'none' }} to={linked}>
                            {button && <Button learnmore={primary}>
                                {icon && <IoLogoGooglePlaystore icon={icon} className="button-icon" size={18} />}
                                {buttonLabel}
                            </Button>}
                            </Link>
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

export default InfoSection;