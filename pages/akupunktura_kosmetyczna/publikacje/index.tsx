import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkuKosHeader from '@/components/akuKosHeader/AkuKosHeader';
import Link from 'next/link';

interface Props {
  locale: string;
}

interface Article {
  name: string;
  link: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'akuKosMain'])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  const articlesList: Article[] = [
    {
      name: `alternatywa do Botoxu`,
      link: `http://www.nytimes.com/2007/12/13/fashion/13SKIN.html`,
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container publics'>
            <h1>Publikacje</h1>
            <ul>
              {articlesList.map((item, index) => {
                return (
                  <li key={`${item.name}akuKosArticle${index}`}>
                    <Link href={item.link}>{item.name}</Link>
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

export default AkuKos;
