import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useSpring } from '@react-spring/web';
import { animated } from '@react-spring/web';

interface Props {
  number: number;
  question: string;
  answer: JSX.Element;
}

const SzlaZdFAQElement = ({ number, question, answer }: Props) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  // animations
  const [hoverArrow, animateHoverArrow] = useSpring(() => ({
    from: { bottom: `0` },
  }));

  const [clickArrow, animateClickArrow] = useSpring(() => ({
    from: { rotateZ: 0 },
  }));

  const [showList, animateShowList] = useSpring(() => ({
    from: { maxHeight: `0` },
  }));

  return (
    <>
      <li className='faq_element'>
        <button
          className='head'
          onClick={() => {
            setShow(!show);
            if (!show) {
              animateClickArrow.start({
                rotateZ: 180,
              });
              animateShowList.start({
                maxHeight: `100rem`,
              });
            } else {
              animateClickArrow.start({
                rotateZ: 0,
              });
              animateShowList.start({
                maxHeight: `0`,
              });
            }
          }}
          onMouseOver={() => {
            animateHoverArrow.start({
              bottom: `-0.5rem`,
            });
          }}
          onMouseOut={() => {
            animateHoverArrow.start({
              bottom: `0`,
            });
          }}
        >
          <h4>{number}</h4>
          <p className='question'>{question}</p>
          <div className='more'>
            <p>{t('szlaZdQuestions:buttonShow')}</p>
            <animated.svg
              style={{ ...hoverArrow, ...clickArrow }}
              height='4mm'
              version='1.1'
              viewBox='0 0 117.34 130.48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g transform='translate(-45.45 -69.417)'>
                <path d='m151.77 70.967a5.2917 5.2917 0 00-7.4836 0l-40.166 40.166-40.166-40.166a5.2917 5.2917 0 00-7.4835 0l-9.4725 9.4725a5.2917 5.2917 0 001e-6 7.4836l53.38 53.38a5.2917 5.2917 0 007.4836 0l53.38-53.38a5.2917 5.2917 0 000-7.4836z' />
                <path d='m151.77 128.01a5.2917 5.2917 0 00-7.4836 0l-40.166 40.166-40.166-40.166a5.2917 5.2917 0 00-7.4835 0l-9.4725 9.4725a5.2917 5.2917 0 001e-6 7.4836l53.38 53.38a5.2917 5.2917 0 007.4836 0l53.38-53.38a5.2917 5.2917 0 000-7.4836z' />
              </g>
            </animated.svg>
          </div>
        </button>
        <animated.p style={showList}>{answer}</animated.p>
      </li>
    </>
  );
};

export default SzlaZdFAQElement;
