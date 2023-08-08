import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AkademiaAdminEditor from '@/components/akademiaAdminEditor/AkademiaAdminEditor';
import AdminPassFrame from '@/components/adminPassFrame/AdminPassFrame';
import { useRecoilState } from 'recoil';
import { isUserLoggedInState } from '@/recoilMain';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'akademiaChMain'])),
    },
  };
}

const Akademia: NextPage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useRecoilState(isUserLoggedInState);

  return (
    <>
      <HeadSet />
      <main id='main' className='main-blur'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        {!isUserLoggedIn && <AdminPassFrame />}
        <StandardMainContent>
          <article
            className={`container main-container akademiaCh-container trainings`}
          >
            {isUserLoggedIn ? (
              <AkademiaAdminEditor />
            ) : (
              <h1>Brak dostępu do narzędzi administratora.</h1>
            )}
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
