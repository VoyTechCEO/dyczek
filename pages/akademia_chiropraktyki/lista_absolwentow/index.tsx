import { NextPage } from 'next';
import React, { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AkademiaGraduatesTable from '@/components/akademiaGraduatesTable/AkademiaGraduatesTable';
import { useTranslation } from 'next-i18next';
import AdminTools from '@/components/adminTools/AdminTools';
import { useQuery } from 'react-query';
import YearClass from '@/interfaces/yearClass';
import CommonLoading from '@/components/commonLoading/CommonLoading';
import CommonError from '@/components/commonError/CommonError';
import { useSpring } from '@react-spring/web';
import { animated } from '@react-spring/web';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akademiaChMain',
        'akademiaChGraduatesList',
      ])),
    },
  };
}

const Akademia: NextPage = () => {
  const [show, setShow] = useState(false);
  const [newGraduatesList, setNewGraduatesList] = useState<YearClass[]>([]);
  const { t } = useTranslation();

  const getGraduatesData = async () => {
    try {
      const res = await fetch(`/api/graduates`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setNewGraduatesList(data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error } = useQuery(`graduatesData`, async () => {
    await getGraduatesData();
  });

  // animations
  const [hoverArrow, animateHoverArrow] = useSpring(() => ({
    from: { bottom: `-0.5rem` },
  }));

  const [clickArrow, animateClickArrow] = useSpring(() => ({
    from: { rotateZ: 90 },
  }));

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article
            className={`container main-container akademiaCh-container graduates`}
          >
            <h1>{t('akademiaChGraduatesList:header1')}</h1>
            {isLoading ? (
              <CommonLoading />
            ) : error ? (
              <CommonError content='Nie udało się załadować absolwentów.' />
            ) : (
              <div className={`tables ${show && 'shown'}`}>
                <AkademiaGraduatesTable />
                <AkademiaGraduatesTable newGrad={newGraduatesList} />
                {!show && <div className='gradient' />}
              </div>
            )}
            <button
              className='show'
              onClick={() => {
                setShow(!show);
                if (!show) {
                  animateClickArrow.start({
                    rotateZ: -90,
                  });
                } else {
                  animateClickArrow.start({
                    rotateZ: 90,
                  });
                }
              }}
              onMouseOver={() => {
                animateHoverArrow.start({
                  bottom: `-1rem`,
                });
              }}
              onMouseOut={() => {
                animateHoverArrow.start({
                  bottom: `-0.5rem`,
                });
              }}
            >
              {show ? 'Zwiń listę absolwentów' : 'Rozwiń listę absolwentów'}
              <animated.svg
                style={{ ...hoverArrow, ...clickArrow }}
                height='0.5rem'
                version='1.1'
                viewBox='0 0 60 50'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  transform='matrix(.37382 0 0 .26978 -8.7481 -1.207)'
                  d='m183.91 97.141-160.5 92.667v-92.667-92.667l80.252 46.334z'
                />
              </animated.svg>
            </button>
            <AdminTools />
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
