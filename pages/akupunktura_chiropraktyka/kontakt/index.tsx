import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkuChiHeader from '../../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AkuKosLogo from '../../../components/akuKosLogo/AkuKosLogo';
import ContactInfo from '@/components/contactInfo/ContactInfo';
import { useTranslation } from 'next-i18next';
import { useSpring } from '@react-spring/web';
import { animated } from '@react-spring/web';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'akuChiContact'])),
    },
  };
}

const AkuChi: NextPage = () => {
  const { t } = useTranslation();

  // animations
  const [hoverLink, animateHoverLink] = useSpring(() => ({
    from: { top: `0` },
  }));

  return (
    <>
      <HeadSet />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent>
          <article
            className={`container main-container akuChiro-container contact`}
          >
            <h1>{t('akuChiContact:header1')}</h1>
            <section>
              <ContactInfo />
              <img src='/img/map.gif' alt='mapa dojazdu' />
            </section>
            <div className='visit'>
              <p>{t('akuChiContact:invitation')}</p>
              <animated.div
                className='icon'
                style={hoverLink}
                onMouseOver={() =>
                  animateHoverLink.start({
                    top: `-1rem`,
                  })
                }
                onMouseOut={() =>
                  animateHoverLink.start({
                    top: `0`,
                  })
                }
              >
                <AkuKosLogo />
              </animated.div>
            </div>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuChi;
