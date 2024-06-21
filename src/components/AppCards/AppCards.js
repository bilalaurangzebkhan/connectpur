import React, { useEffect, useRef, useState } from 'react';
//import { animated, interpolate, useSprings } from 'react-spring';
import { animated, useSprings } from 'react-spring';
import move from 'lodash-move';
import { ContentWrap, CardWrap, Heading, Paragraph, InfoSec, InfoColumn, InfoRow } from './AppCards.elements';
import { Container, Button } from '../../globalStyles'
import { PiCommandBold } from 'react-icons/pi';
import image1 from '../../images/sabzlandApp//sabzlandBuyerMarketplace.png'; // Replace with your image path
import image2 from '../../images/sabzlandApp/sabzlandSellerShop.png';
import image3 from '../../images/sabzlandApp/sabzlandFindSeller.png';
import image4 from '../../images/sabzlandApp/sabzlandFindBuyer.png';

const cards = [
  { image: image1, content: 'Sabzland' },
  { image: image2, content: 'Sabzland Agriculture' },
  { image: image3,content: 'Sabzland Business Suite' },
  { image: image4, content: 'Content 4' },
];
const paragraphs = [
  'A platform for real-time market insights, knowledge exchange, and a marketplace for seamless trade.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui sit amet velit posuere blandit. Fusce lacinia.',
  'Vestibulum sit amet ante in ex eleifend dictum. Nam sodales odio ac urna ullamcorper.',
];
const buttons = ['Download mobile app', 'Sign up now', 'Learn more', 'Get started'];
const config = { tension: 400, friction: 20 };
//const CARD_RATIO = '63.1%';
const CARD_COUNT = cards.length;
const CARD_OFFSET = -10;
const INTERVAL_DURATION = 5000; // 5 seconds interval

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

const getRandomIndex = array => Math.floor(Math.random() * array.length);

const AppCards = () => {
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
              <Heading>{cards[currentCardIndex].content}</Heading>
              <Paragraph>{paragraphs[getRandomIndex(paragraphs)]}</Paragraph>
              <Button learnmore={true}>
                <PiCommandBold className="button-icon" size={18} />
                {buttons[getRandomIndex(buttons)]}
              </Button>
            </ContentWrap>
          </InfoColumn>
      
          <InfoColumn >
            <CardWrap ref={ref}>
            {springs.map(({ scale, y, zIndex }, index) => {
              const { image } = cards[index];
              return (
                <animated.img
                  src={image}
                  alt={cards[index].content} // Add alt text for accessibility
                  style={{
                    
                    cursor: 'grab',
                    
                    position: 'absolute',
                    
                    //paddingTop: CARD_RATIO,
                    // transformOrigin: 'top center',
                    zIndex,
                    paddingRight: 0,
                    border: 0,
                    maxWidth: '100%',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    maxHeight: '500px',
                    
                  }}
                  key={index}
                />
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

export default AppCards;
