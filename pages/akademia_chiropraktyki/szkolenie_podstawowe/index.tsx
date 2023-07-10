import { NextPage } from 'next';
import React, { useState } from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useQuery } from 'react-query';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import ElementRef from '@/components/elementRef/ElementRef';
import AdminTools from '@/components/adminTools/AdminTools';
import CommonError from '@/components/commonError/CommonError';
import CommonLoading from '@/components/commonLoading/CommonLoading';

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
  const [noticeData, setNoticeData] = useState<AkademiaTraining>({
    date: '',
    content: '',
  });
  const { t } = useTranslation();

  const getNoticeData = async () => {
    try {
      const res = await fetch(`/api/notices/basic`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setNoticeData(data.response);
      console.log(data.comment);
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error } = useQuery(`noticeData`, async () => {
    await getNoticeData();
  });

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container trainings`}>
            {isLoading ? (
              <CommonLoading />
            ) : error ? (
              <CommonError content='Nie udało się załadować komunikatu' />
            ) : (
              <>
                <h1>Opublikowano: {noticeData.date}</h1>
                <ElementRef
                  element='section'
                  content={noticeData.content}
                  className='notice'
                />
              </>
            )}
            <AdminTools />
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
