// Cards.js
import React, { useEffect, useRef, useState } from 'react';
import { animated, interpolate, useSprings } from 'react-spring';
import move from 'lodash-move';
import { ContentWrap, CardWrap, Heading, HeadingTwo, Paragraph, GParagraph, InfoSec, InfoColumn, InfoRow, HeadingOne } from './styles';
import { Container, Button } from '../../globalStyles'
//import { PiCommandBold } from 'react-icons/pi';

const cards = [
  { color: '#2d6a4f', content: '“Connetpur”',  contentOne: 'Sabzland’s', contentTwo: '',  subcontent: '', image: require('../../images/cards/2.png') },
  { color: '#40916c', content: '', contentOne: '', contentTwo: 'Innovative app that integrates market trends, a collaborative community platform, and a digital marketplace,  tailored for the agriculture needs.', subcontent: 'Connetpur', image: require('../../images/cards/2.png') },
  { color: '#52b788', content: 'Efficiency Unleashed, Seamlessly.',  contentOne: '', contentTwo: '',  subcontent: 'Sabzland', image: require('../../images/cards/2.png') },
  { color: '#74c69d', content: 'Data-Driven Growth, Rooted in Efficiency.',  contentOne: '', contentTwo: '', subcontent: 'Sabzland Business Suite', image: require('../../images/cards/2.png') },
  { color: '#95d5b2', content: 'Navigating Complexity, Simplifying Solutions.',  contentOne: '', contentTwo: '', subcontent: 'Sabzland Business Suite', image: require('../../images/cards/2.png') },
  { color: '#b7e4c7', content: '', contentOne: '', contentTwo: 'At Sabzland, Our mission is our revolutionize agriculture through our commitment to “zero net carbon emissions” and sustainable practices, ensuring a greener planet for generations to come.', subcontent: 'Sabzland Agriculture', image: require('../../images/cards/3.png') },
  { color: '#d8f3dc', content: 'Navigating Complexity, Simplifying Solutions.',  contentOne: '', contentTwo: '',  subcontent: 'Sabzland Business Suite', image: require('../../images/businessSuiteTwo.png') },
];
const paragraphs = [
  'An agriculture platform for  real-time market insights, knowledge exchange, and a marketplace for seamless trade.',
  '',
  '',
  '',
  '',
];
const buttons = ['Download mobile app', 'Sign up now', 'Learn more', 'Get started'];
const config = { tension: 400, friction: 20 };
const CARD_RATIO = '63.1%';
const CARD_COUNT = cards.length;
const CARD_OFFSET = -10;
const INTERVAL_DURATION = 10000; // 5 seconds interval

const setScale = count => 1 - count / 20;

const setter = (order, curIndex, y, down) => index => {
  index = order.indexOf(index);
  const isBelow = y < -100;

  return down && index === curIndex
    ? {
        scale: isBelow ? setScale(CARD_COUNT) : 1,
        y,
        zIndex: isBelow ? 1 : CARD_COUNT + 1,
        config,
        immediate: key => key === 'y' || key === 'zIndex'
      }
    : {
        scale: setScale(index),
        y: index * CARD_OFFSET,
        zIndex: CARD_COUNT - index + 1,
        immediate: key => key === 'zIndex'
      };
};

// const getRandomIndex = array => Math.floor(Math.random() * array.length);

const Cards = () => {
  const ref = useRef(null);
  const cardOrder = useRef(cards.map((_, index) => index));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [springs, setSprings] = useSprings(
    CARD_COUNT,
    setter(cardOrder.current)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newOrder = move(cardOrder.current, CARD_COUNT - 1, 0);
      cardOrder.current = newOrder;
      setSprings(setter(cardOrder.current));
      setCurrentCardIndex(prevIndex =>
        prevIndex === CARD_COUNT - 1 ? 0 : prevIndex + 1
      );
    }, INTERVAL_DURATION);

    return () => clearInterval(interval);
  }, [setSprings]);

  return (
    <>
    <InfoSec>
      <Container>
        <InfoRow >
        <InfoColumn>
        <ContentWrap>
        {/* <GParagraph style={{ color: cards[currentCardIndex].color }}>{cards[currentCardIndex].subcontent}</GParagraph> */}
        <GParagraph>{cards[currentCardIndex].subcontent}</GParagraph>
        <HeadingOne>{cards[currentCardIndex].contentOne}</HeadingOne>
        <Heading>{cards[currentCardIndex].content}</Heading>
        <HeadingTwo>{cards[currentCardIndex].contentTwo}</HeadingTwo>
        <Paragraph>{paragraphs[currentCardIndex]}</Paragraph>
        {/* <Button learnmore={true}>
          <PiCommandBold className="button-icon" size={18} />
          {buttons[getRandomIndex(buttons)]}
        </Button> */}
      
      </ContentWrap>
      </InfoColumn>
      
      <InfoColumn >
      <CardWrap ref={ref}>
        {springs.map(({ scale, y, zIndex }, index) => {
          const { color, image } = cards[index];

          return (
            <animated.div
              style={{
                backgroundColor: color,
                borderRadius: '3% / 5%',
                cursor: 'grab',
                left: 0,
                padding: '10px',
                height: '100%',
                width: '100%',
                position: 'absolute',
                right: 0,
                transform: interpolate(
                  [y, scale],
                  (y, scale) => `translateY(${y}px) scale(${scale})`
                ),
                transformOrigin: 'top center',
                zIndex
              }}
              key={index}
            >
              <img src={cards[currentCardIndex].image} alt={cards[index].content} style={{ width: '100%', height: '100%' }} />
            </animated.div>
          );
        })}
        </CardWrap>
      </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
    </>
  );
};

export default Cards;

