import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import SocialIcons from '@/interfaces/socialIcons';
import useSetPageSpecs from '@/hooks/useSetPageSpecs';

const Akademia: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  const socialIcons: SocialIcons[] = [
    {
      name: `Facebook Akademia Chiropraktyki`,
      image: `/img/facebook.webp`,
      link: `https://fb.watch/iUeTioOtwn/`,
    },
  ];

  return (
    <>
      <HeadSet
        title='AKADEMIA CHIROPRAKTYKI'
        keywords='akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk'
      />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className={`container akademiaCh-container`}>
            <h1>AKUPUNKTURA</h1>
            <p>
              Pobudza naturalne możliwości przywracania dobrego stanu zdrowia
              przez organizm ludzki.
            </p>
            <h1>CHIROPRAKTYKA</h1>
            <p>
              Jest efektywną i bezpieczną metodą przywracania zdrowia przez
              delikatne manipulacje dłońmi na kręgosłupie i innych stawach.
            </p>
            <h1>JEŻELI MASZ PROBLEM Z:</h1>
            <p>BÓLAMI</p>
            <ul>
              <li>kręgosłupa</li>
              <li>krzyża</li>
              <li>głowy</li>
              <li>mięśni</li>
              <li>stawów</li>
            </ul>{' '}
            <p>ZABURZENIAMI</p>
            <ul>
              <li>trawienia</li>
              <li>snu</li>
              <li>krążenia </li>
              <li>cyklu miesiączkowego</li>
              <li>płodności</li>
            </ul>
            <p>NERWICAMI, STANAMI DEPRESYJNYMI, CHOROBAMI SKÓRY</p>
            <h1>TO NIE TRAĆ CZASU TYLKO ZADZWOŃ DO MNIE LUB PRZYJDŹ!!!</h1>
            <h1>Uwaga!!!</h1>
            <p>
              Organizuję kursy, szkoleniowe w zakresie chiropraktyki i
              akupunktury dla lekarzy medycyny i fizjoterapeutów w języku
              polskim i angielskim.
            </p>
          </article>
        </StandardMainContent>
        <Footer sinceYear={1999} socialIcons={socialIcons} />
      </main>
    </>
  );
};

export default Akademia;
