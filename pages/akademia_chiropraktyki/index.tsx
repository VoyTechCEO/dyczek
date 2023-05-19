import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

interface Props {
  locale: string;
}

interface Logo {
  link: string;
  alt: string;
  src: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const Akademia: NextPage = () => {
  const logosList: Logo[] = [
    {
      link: `http://www.chiropraktycy.pl/`,
      alt: `Chiropraktycy Polscy`,
      src: `/img/chiropraktycy_polscy_logo.png`,
    },
    {
      link: `/akupunktura_kosmetyczna`,
      alt: `Akupunktura Kosmetyczna`,
      src: `/img/akupunktura_kosmetyczna_logo.png`,
    },
    {
      link: `/szlachetne_zdrowie`,
      alt: `Szlachetne Zdrowie`,
      src: `/img/szlachetne_zdrowie_logo.png`,
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container home`}>
            <h1>Opinie o szkoleniach. Dlaczego chiropraktyka?</h1>
            <p>--- TU WSTAWIĆ FILMY ---</p>
            <img
              className='view'
              src='/img/chiropraktyka1.png'
              alt='Nauka w Akademii'
            />
            <p>
              <b>Akademia Chiropraktyki</b> oferuje Państwu wyjątkową możliwość
              poznania sztuki i nauki <b>Chiropraktyki</b> całego aparatu ruchu.
            </p>
            <p>Odwiedź również:</p>
            <ul className='logos'>
              {logosList.map((item, index) => {
                return (
                  <li key={`${item.link}akademiaChLogo${index}`}>
                    <Link href={item.link} target='_blank'>
                      <img src={item.src} alt={item.alt} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
