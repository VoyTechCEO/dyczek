import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../hooks/useSetPageSpecs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ElementRef from '../../components/elementRef/ElementRef';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'imoHome', 'imoMain'])),
    },
  };
}

const IMO: NextPage<Props> = () => {
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  const targetList: string[] = t('imoHome:target', { returnObjects: true });

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
            <h1>{t('imoHome:targetTitle')}</h1>
            <ul className='dashed'>
              {targetList.map((item, index) => {
                return <li key={`${item}targets${index}`}>{item}</li>;
              })}
            </ul>
            <h1>{t('imoHome:missionTitle')}</h1>
            <ElementRef element='p' content={t('imoHome:mission')} />
            <h1>Henryk Dyczek</h1>
            <p>{t('imoHome:date')}</p>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
