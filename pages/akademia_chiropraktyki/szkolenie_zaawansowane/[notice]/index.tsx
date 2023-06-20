import { GetServerSidePropsContext, NextPage } from 'next';
import React, { useState } from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import AdminTools from '@/components/adminTools/AdminTools';

interface Props {
  // noticeData: AkademiaTraining[];
  locale: string;
}

// export async function getStaticProps({ locale }: Props) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['main', 'akademiaChMain'])),
//     },
//   };
// }

export const getServerSideProps = async ({ locale }: Props) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['main', 'akademiaChMain'])),
      },
    };
    // console.log(context.params?.notice);
    // const res = await fetch(`/api/notices/advanced/${context.params?.notice}`, {
    //   method: `GET`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const noticeData: AkademiaTraining[] = await res.json();

    // return {
    //   props: { noticeData },
    // };
  } catch (err) {
    return {
      redirect: {
        destination: '/akademia_chiropraktyki/szkolenie_zaawansowane',
        statusCode: 307,
      },
    };
  }
};

const Akademia = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container trainings`}>
            <AdminTools />
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
