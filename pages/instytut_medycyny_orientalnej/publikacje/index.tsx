import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import Link from 'next/link';
import imoPublicsList from '../../../utils/imoPublicsList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'imoMain'])),
    },
  };
}

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  return (
    <>
      <HeadSet
        title={pageSpecs.title}
        keywords={pageSpecs.keywords}
        desc={pageSpecs.description}
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>Publikacje</h1>
            <ul>
              {imoPublicsList.map((sector, sectorIdx) => {
                return (
                  <li
                    key={`${sector}publicsSectors${sectorIdx}`}
                    className='public-sector'
                  >
                    <h2>{sector.year}</h2>
                    <ul>
                      {sector.publics.map((item) => {
                        return (
                          <li key={`${item}publics`} className='post'>
                            <p className='align-left'>
                              <span>{item.header}</span>
                            </p>
                            <h4>Autor:</h4>
                            <p className='align-left'>{item.author}</p>
                            <h4>Streszczenie:</h4>
                            <div>{item.short}</div>
                            <Link href={`/docs/imo/${item.doc}`}>
                              Pobierz pełen dokument ({item.doc})
                              {item.english ? ` - po angielsku` : ``}
                            </Link>
                            <div className='line' />
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
