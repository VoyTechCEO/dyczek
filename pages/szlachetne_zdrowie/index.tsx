import { NextPage } from 'next';
import React from 'react';
import Footer from '../../components/footer/Footer';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import SzlaZdHeader from '../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import useSetPageSpecs from '../../hooks/useSetPageSpecs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import SmallerInfo from '../../components/smallerInfo/SmallerInfo';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'szlaZdMain'])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container szlaZd-container about'>
            <div className='quotes'>
              <div className='quote'>
                <p>
                  XVI wiek
                  <br />
                  <br />
                  Ślachetne zdrowie,
                  <br /> Nikt się nie dowie,
                  <br /> Jako smakujesz,
                  <br /> Aż się zepsujesz.
                </p>
                <p className='author'>Jan Kochanowski (1530-1584)</p>
              </div>
              <div className='quote'>
                <p>
                  XXI wiek
                  <br />
                  <br />
                  Zdrowie i choroba określone są na poziomie milionów komórek
                  tworzących nasze ciało i organy.
                </p>
                <p className='author'>Dr med. Mathias Rath, 2007r.</p>
              </div>
            </div>
            <h1>W obecnych czasach mamy:</h1>
            <div className='descriptions'>
              <ul className='description'>
                <li>Wysoce wykwalifikowaną opiekę medyczną.</li>
                <li>Setki diet.</li>
                <li>Tyle samo ekspertów od żywienia</li>
                <li>
                  Dostęp do wielu suplementów diety, tj. witamin, minerałów,
                  etc.
                </li>
              </ul>
              <ul className='description'>
                <li>
                  Postępujący wzrost umieralności na choroby układu krążenia.
                </li>
                <li>Wzrost zachorowalności i umieralności na nowotwory.</li>
                <li>Co trzeciego noworodka z alergią.</li>
              </ul>
              <div className='letter'>
                <div className='content'>
                  <div className='speech'>
                    <h4>Szanowni Państwo,</h4>
                    <p>
                      <span>Zdrowie</span> jest zbyt poważną sprawą, aby
                      całkowicie powierzać je innym! Na stronach{' '}
                      <span>Szlachetne Zdrowie</span> dzielę się moim ponad
                      dwudziestoletnim doświadczeniem klinicznym, jak zdrowo żyć
                      i jak się starzeć nie będąc ciężarem dla innych.
                    </p>
                    <p>
                      Zalecenia prozdrowotne umieszczone na stronach Szlachetne
                      Zdrowie są osobiście sprawdzone lub poparte rzetelnymi
                      badaniami naukowymi. Lekturę proponuje rozpocząć od
                      zakładki{' '}
                      <Link href='/szlachetne_zdrowie/pytania'>pytania</Link>,
                      następnie polecam{' '}
                      <Link href='/szlachetne_zdrowie/pytania'>publikacje</Link>{' '}
                      i <Link href='/szlachetne_zdrowie/pytania'>linki</Link>.
                    </p>{' '}
                    <p>
                      Życzę wiele lat w dobrym zdrowiu fizycznym, psychicznym i
                      duchowym.
                    </p>{' '}
                    <i>Styczeń 2009</i>
                  </div>
                  <img src='/img/dyczekHenryk2.jpg' alt='Henryk Dyczek' />
                </div>
                <p className='ending'>
                  Z wyrazami szacunku,
                  <br />
                  dr n. med. Henryk Dyczek, D.C., B.Sc., M.A., Ac.M., FEA,
                  M.B.Ac.C. <br />
                  <Link href='/'>www.dyczek.pl</Link>
                </p>
              </div>
            </div>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default SzlaZd;
