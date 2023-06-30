import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkuKosHeader from '@/components/akuKosHeader/AkuKosHeader';
import ElementRef from '@/components/elementRef/ElementRef';
import Link from 'next/link';

interface Props {
  locale: string;
}

interface AboutInfo {
  content: string;
  link?: string;
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

  const aboutList: AboutInfo[] = [
    {
      content: `<b>Promienista, jędrna i tryskająca zdrowiem skóra twarzy</b> to nie jedyny efekt odmładzającej akupunktury kosmetycznej. Akupunktura swoim działaniem nie tylko regeneruje najbardziej zewnętrzną część ciała, czyli skórę, ale rewitalizuje cały organizm człowieka.`,
    },
    {
      content: `Efekt zewnętrzny, czyli jak wyglądamy i jak chcemy, aby postrzegali nas inni jest <b>naturalnym dążeniem człowieka</b>. Im efekt ten jest lepszy, tym <b>jesteśmy bardziej zadowoleni</b>. Efekt zewnętrzny zostaje spotęgowany w działaniu, kiedy towarzyszy nam dobre samopoczucie, dlatego akupunktura nie tylko rewitalizuje skórę twarzy, ale cały organizm człowieka poprawiając tym samym jego samopoczucie.`,
      link: `http://www.youtube.com/watch?v=3Rtndo8BoDk`,
    },
    {
      content: `Na co dzień jesteśmy kuszeni <b>pięknem twarzy i ciała</b> pojawiającym się na ekranie telewizora oraz w kolorowych magazynach i zachęcani do jego kopiowania, jakkolwiek oczekiwania nasze nie są realne.`,
    },
    {
      content: `Presja urody i sprawności fizycznej oddziałuje zarówno na kobiety, jak i na mężczyzn. Sugeruje się, że te atuty są niezbędne do pomyślnej kariery zawodowej i udanego harmonijnego życia osobistego. Jednakże, brak wewnętrznej harmonii umysłu i ducha jest lustrzanym odbiciem twarzy. <b>Szczęśliwy człowiek promieniuje swoim szczęściem</b>, szczególnie widocznym na jego twarzy.`,
    },
    {
      content: `Być może jesteś szczęśliwym człowiekiem, lecz czas poczynił pewne zmiany, które zauważasz na Twojej twarzy i życzeniem Twoim jest ich usunięcie. Jest to możliwe, ale dla trwałości efektu akupunkturą będziemy odmładzać nie tylko ciało, ale i całą Twoją psychikę.`,
      link: `http://www.cosmeticacupuncture.ca/cosmetic/`,
    },
    {
      content: `Człowiek, aby żyć musi działać, czego konsekwencją jest stres spowodowany przez naturalne wzloty i upadki. Jest to proza życia. Regularną akupunkturą można jednak pomóc zarówno ciału, jak i psychice, aby zarówno wzloty, jak i upadki nie wyczerpywały nadmiernie <b>źródła naszej energii życia</b>.`,
    },
    {
      content: `Potrzeba przeglądu samochodu jest niezbędna do jego sprawnego działania. Podobnie jest z organizmem człowieka. Brak tych przeglądów prowadzi do osłabienia wigoru życia i ogólnego przygnębienia, jakże często manifestującego się na twarzy.`,
    },
    {
      content: `<b>Akupunktura kosmetyczna</b> nie tylko zminimalizuje pojawianie się zmarszczek na czole, wokoło oczu i ust, ale przywróci wigor życia poprawiając tym samopoczucie.`,
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container about'>
            <h1>Akupunktura kosmetyczna</h1>
            <ul>
              {aboutList.map((item, index) => {
                return (
                  <li key={`${item.content}akuKosAbout${index}`}>
                    <ElementRef element='p' content={item.content} />
                    {item.link && (
                      <Link href={item.link} target='_blank'>
                        Zobacz
                      </Link>
                    )}
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
