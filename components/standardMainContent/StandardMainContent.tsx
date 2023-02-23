import React from 'react';
import SubNav from '../subNav/SubNav';
import standardMainContentStyles from './standardMainContent.module.css';
import SubNavItem from '../../interfaces/subNavItem';
import ArticleContent from '../articleContent/ArticleContent';

interface Props {
  subNavItems: SubNavItem[];
}

const StandardMainContent = ({ subNavItems }: Props) => {
  // try putting the following children into useRecoil or Redux, so every time the user enters a specific page it sets recoil state to its own content

  const children = (
    <>
      <h1>AKUPUNKTURA</h1>
      <p>
        Pobudza naturalne możliwości przywracania dobrego stanu zdrowia przez
        organizm ludzki.
      </p>
      <h1>CHIROPRAKTYKA</h1>
      <p>
        Jest efektywną i bezpieczną metodą przywracania zdrowia przez delikatne
        manipulacje dłońmi na kręgosłupie i innych stawach.
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
        Organizuję kursy, szkoleniowe w zakresie chiropraktyki i akupunktury dla
        lekarzy medycyny i fizjoterapeutów w języku polskim i angielskim.
      </p>
    </>
  );

  return (
    <>
      <section className={`container ${standardMainContentStyles.container}`}>
        <SubNav subNavItems={subNavItems} />
        <ArticleContent children={children} />
      </section>
    </>
  );
};

export default StandardMainContent;
