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
import AdminTools from '@/components/adminTools/AdminTools';
import AkademiaNoticePanel from '@/components/akademiaNoticePanel/AkademiaNoticePanel';

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
  const [noticesData, setNoticesData] = useState<AkademiaTraining[]>([
    {
      date: '',
      content: '',
    },
  ]);
  const { t } = useTranslation();

  const getNoticesData = async () => {
    try {
      const res = await fetch(`/api/notices/advanced`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setNoticesData(data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error } = useQuery(`noticesData`, async () => {
    await getNoticesData();
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
              <h1>Trwa ładowanie komunikatu.</h1>
            ) : error ? (
              <h1>Nie udało się załadować komunikatu</h1>
            ) : (
              <>
                <h1>Szkolenia zaawansowane</h1>
                <ul className='notices'>
                  {noticesData.map((item, index) => {
                    return (
                      <li key={`${item}akademiaNotice${index}`}>
                        <AkademiaNoticePanel
                          id={item.id!}
                          title={item.title!}
                          desc={item.desc!}
                          date={item.date}
                        />
                      </li>
                    );
                  })}
                </ul>
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
