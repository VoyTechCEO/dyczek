import { GetServerSidePropsContext } from 'next';
import React from 'react';
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
import ElementRef from '@/components/elementRef/ElementRef';

interface Props {
  noticeData: AkademiaTraining;
}

const Akademia = ({ noticeData }: Props) => {
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
            <h1>Opublikowano: {noticeData.date}</h1>
            <ElementRef
              element='section'
              content={noticeData.content}
              className='notice'
            />
            <AdminTools />
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/notices/advanced/${context.params?.notice}`,
      {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    const noticeData: AkademiaTraining = data.response;

    return {
      props: {
        noticeData,
        ...(await serverSideTranslations(context.locale!, [
          'main',
          'akademiaChMain',
        ])),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: '/akademia_chiropraktyki/szkolenie_zaawansowane',
        statusCode: 307,
      },
    };
  }
};

export default Akademia;
