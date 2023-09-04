import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useQuery } from 'react-query';
import AdminTools from '@/components/adminTools/AdminTools';
import AkademiaNoticePanel from '@/components/akademiaNoticePanel/AkademiaNoticePanel';
import { useRecoilState } from 'recoil';
import { advancedNoticesListState } from '@/recoilMain';
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
  const { t } = useTranslation();
  const [advancedNoticesList, setAdvancedNoticesList] = useRecoilState(
    advancedNoticesListState
  );

  const getNoticesData = async () => {
    try {
      const res = await fetch(
        `https://dyczek.netlify.app/api/notices/advanced`,
        {
          method: `GET`,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      const noticesList = data.response.reverse();
      setAdvancedNoticesList(noticesList);
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
          <article
            className={`container main-container akademiaCh-container trainings`}
          >
            {isLoading ? (
              <CommonLoading />
            ) : error ? (
              <CommonError content='Nie udało się załadować komunikatów.' />
            ) : (
              <>
                <h1>Szkolenia zaawansowane</h1>
                <ul className='notices'>
                  {advancedNoticesList.map((item, index) => {
                    return (
                      <AkademiaNoticePanel
                        key={`${item}akademiaNotice${index}`}
                        id={item.id!}
                        title={item.title!}
                        desc={item.desc!}
                        date={item.date}
                      />
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
