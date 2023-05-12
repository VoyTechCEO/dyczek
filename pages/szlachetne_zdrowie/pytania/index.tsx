import { NextPage } from 'next';
import React, { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import SzlaZdHeader from '../../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'szlaZdMain'])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container szlaZd-container faq'>
            <h1>F.A.Q. - Pytania i odpowiedzi</h1>
            <ul>
              <li>
                <button className='head' onClick={() => setShow(!show)}>
                  <h4>1</h4>
                  <p className='question'>
                    Zwracam uwagę na to, co jem i z jakich źródeł pochodzi mój
                    pokarm. Czy to wystarczy, aby cieszyć się dobrym zdrowiem?
                  </p>
                  {/* zamiast znikać niech zjeżdża na dół */}
                  {!show && (
                    <div className='more'>
                      <p>Odpowiedź</p>
                      <svg
                        height='0.5rem'
                        version='1.1'
                        viewBox='0 0 60 50'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          transform='matrix(.37382 0 0 .26978 -8.7481 -1.207)'
                          d='m183.91 97.141-160.5 92.667v-92.667-92.667l80.252 46.334z'
                        />
                      </svg>
                    </div>
                  )}
                </button>
                {show && (
                  <div className='answer'>
                    <p>
                      W opinii dr Rath, pioniera Medycyny Komórkowej (
                      <a href='www.rath-eduserv.com'>www.rath-eduserv.com</a>),
                      ,,nie powinniśmy się dać zwieść samozwańczym apostołom
                      diety i mistrzom jogi" (Rath, 2007:247). Źródłem zdrowia
                      człowieka jest zapewnienie każdej komórce człowieka
                      wystarczającej ilości składników pokarmowych, tj.
                      makroelementów (białka, węglowodany i tłuszcze) i
                      mikroelementów (witaminy, minerały, pierwiastki śladowe i
                      aminokwasy) (Rath, 2007).
                    </p>
                    <p>
                      <b>
                        Zdrowie i choroba określone są na poziomie milionów
                        komórek tworzących nasze ciało i organy (Rath, 2007:225)
                      </b>
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default SzlaZd;
