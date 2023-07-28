import React, { useState, useRef } from 'react';
import akademiaMottoStyles from './akademiaMotto.module.css';
import { useTranslation } from 'next-i18next';
import ElementRef from '../elementRef/ElementRef';
import { useScroll, animated } from '@react-spring/web';

const AkademiaMotto = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null!);

  // animations
  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      // if (
      //   ref.current.getBoundingClientRect().top < 600 &&
      //   ref.current.getBoundingClientRect().top > 350
      // ) {
      //   setProgress(scrollYProgress * 5);
      // }
      // console.log(`top: ${ref.current.getBoundingClientRect().top}`);
      if (document.body.scrollHeight > 3800) {
        setProgress(scrollYProgress * 20);
      } else if (document.body.scrollHeight > 3300) {
        setProgress(scrollYProgress * 15);
      } else if (document.body.scrollHeight > 3100) {
        setProgress(scrollYProgress * 13);
      } else {
        setProgress(scrollYProgress * 8);
      }
      console.log(document.body.scrollHeight);
    },
  });

  return (
    <>
      <animated.div
        className={`container ${akademiaMottoStyles.container}`}
        style={{ opacity: progress }}
        ref={ref}
      >
        <div className={akademiaMottoStyles.edge} />
        <ElementRef element='h1' content={t('akademiaChMain:motto')} />
        <div className={akademiaMottoStyles.edge} />
      </animated.div>
    </>
  );
};

export default AkademiaMotto;
