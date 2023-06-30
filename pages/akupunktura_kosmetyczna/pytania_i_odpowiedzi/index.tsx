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

interface Props {
  locale: string;
}

interface Thread {
  question: string;
  answer: string[];
  list?: string[];
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

  const threadsList: Thread[] = [
    {
      question: `Kto przeprowadza zabieg?`,
      answer: [
        `<a href='/'>Dr n. med. Henryk Dyczek</a>, Ac.M., FEA, MBAcC, D.C., B.Sc., M.A. jest absolwentem College of Traditional Acupuncture, Oxford College of Chiropractic, Oxford Brookes University, Lancaster University I Uniwesytetu Łódzkiego. Specjalizację w zakresie akupunktury kosmetycznej uzyskał w Instytucie <a href='https://www.facialenhance.co.uk/'>Facial Enhance Acupuncture</a> prowadzonym przez Paula Atkinsa w Kornwalii, Wielka Brytania. Henryk Dyczek jest pełnoprawnym członkiem <a href='https://acupuncture.org.uk/'>British Acupuncture Council</a> (Brytyjskiej Rady Akupunktury).`,
      ],
    },
    {
      question: `Jakich mogę oczekiwać rezultatów?`,
      answer: [
        `W związku z tym, że zabieg jest <b>całkowicie naturalny</b>, tzn. do skóry nie wprowadza się żadnych substancji chemicznych, <b>nie ma on żadnych przeciwwskazań</b>. Efekt odmładzania skóry klienta uzyskuje się poprzez stymulację energii ciała pacjenta za pomocą punktów akupunktury. Efekt działania akupunktury odczuwany jest również w lepszym samopoczuciu klienta.`,
        `Po każdym z zabiegów akupunktury kosmetycznej klient zauważa stopniowe <b>wygładzanie zmarszczek</b> twarzy i akupunktury kosmetycznej używane są nie tylko punkty akupunktury znajdujące się na twarzy. Toteż, nierzadko klienci zauważają ogólną <b>poprawę samopoczucia i ulgę</b> w innych dolegliwościach. Istnieje możliwość ukierunkowania zabiegów akupunktury na różne dolegliwości. Powinny być one jednak zasygnalizowane w czasie pierwszej konsultacji.`,
        `Zabiegi <b>akupunktury kosmetycznej</b> nie dają tak uderzających i natychmiastowych rezultatów jak to ma miejsce w przypadku zastosowania procedur medycyny estetycznej. Akupunktura kosmetyczna pracuje na subtelnym poziomie naturalnej energii pacjenta. Zatem oczekiwane zmiany w wyglądzie twarzy są bardziej wytworne i delikatne, zaś koszty akupunktury kosmetycznej są nieporównywalnie niższe niż koszty innych zabiegów medycyny estetycznej. <a href='http://zdrowie.onet.pl/1470227,2039,,,,po_co_leki_dajcie_igly_,profilaktyka.html'>Zobacz</a>.`,
        `Stosowanie akupunktury kosmetycznej pomaga w:`,
      ],
      list: [
        `Trądziku i innych chorobach skóry`,
        `Redukuje zmarszczki`,
        `Usuwa worki pod oczami`,
        `Podnosi opadające powieki`,
        `Ujędrnia skórę twarzy`,
        `Nawilża skórę`,
        `Ożywia wygląd oczu`,
        `Pomaga pacjentowi wyglądać i czuć się lepiej`,
      ],
    },
    {
      question: `Jak wygląda zabieg akupunktury kosmetycznej?`,
      answer: [
        `Każdy człowiek jest inny zatem reakcja na zabieg akupunktury kosmetycznej różni się u każdej osoby. Toteż rekomendowane jest poddanie się <b>cyklowi zabiegów</b> dla osiągnięcia optymalnego efektu odmłodzenia skóry. Jakkolwiek zauważalne zmiany w odmłodzeniu skory są często widoczne <b>już po pierwszym zabiegu</b>, natomiast znaczące zmiany pojawiają się po 3-4 zabiegach. Proponowana częstotliwość zabiegu to 1-2 tygodniowo. Zwiększona częstotliwość zabiegów daje szybsze odmłodzenie i regenerację skóry.`,
        `Ponadto akupunktura oferuje odmładzanie od wewnątrz, czyli odmładza nie tylko skórę, która jest największym narządem człowieka, ale cały jego organizm, tak że nie wygląda on tylko lepiej, ale poprawia się jego samopoczucie i zwiększa energia życia - <b>powraca witalność i sprężystość</b>.`,
        `Wiele osób regularnie korzysta z usług salonów kosmetycznych, czy uczęszcza do różnego rodzaju klubów sportowych i wellness. Akupunktura stosowana <b>systematycznie</b> utrzymuje ciało i psychikę człowieka na poziomie wysokiej sprawność fizycznej i psychicznej.`,
        `Pierwsza wizyta trwa około 1 godziny, podczas której zbierana jest informacja o zdrowiu klienta. Pozostałe wizyty, w czasie których wykonywane są zabiegi akupunktury mieszczą się w około 30 minutach. <b>Obecność Państwa w gabinecie, jak i treść prowadzonych rozmów pozostaje poufna</b>.`,
      ],
    },
    {
      question: `Czy igły sprawiają ból?`,
      answer: [
        `Używane igły są bardzo cienkie (Ø0,16-0,22mm). Są to igły sterylne i jednorazowego użycia. Podczas nakłuwania u niektórych osób odczuwane jest jedynie delikatne uczucie szczypania. Cały zabieg akupunktury jest doświadczeniem relaksującym. Większość osób niedowierza jak cienkie są igły akupunktury i jak subtelne odczucie one generują.`,
        `Akupunktura nie generuje efektów ubocznych. Bardzo, bardzo rzadko pojawia maleńki siniak w rejonie nakłucia, który zanika po kilku dniach.`,
      ],
    },
    {
      question: `Czy akupunktura jest dla mnie?`,
      answer: [
        `Akupunktura kosmetyczna jest <b>dobra dla każdego</b>. Wiele osób preferuje akupunkturę kosmetyczną zamiast zabiegów chirurgii estetycznej. Pomimo tego, że efekt akupunktury kosmetycznej może znacząco odmłodzić skórę, nie może być on jednak porównywany z efektem zabiegów chirurgii. Jednakże rezultaty akupunktury kosmetycznej są bardziej subtelne i naturalnie harmonizujące z fizjonomią twarzy dając jej naturalny blask.`,
        `Akupunktura kosmetyczna jest bardzo wskazana przy trądziku i wiotczejącej skórze. Zabiegi akupunktury nie tylko <b>odmładzają i ujędrniają</b> skórę, ale działają na cały ustrój człowieka poprawiając jego samopoczucie.`,
        `Być może jesteś osobą, która odczuwa swój wiek i zauważasz zmiany skórne na twarzy. Jeżeli tak jest to akupunktura kosmetyczna może Ci pomoc w rewitalizacji skory i regeneracji nadszarpniętej energii życiowej. Po kliku zabiegach akupunktury kosmetycznej usłyszysz komentarz: <b>,,jak dobrze wyglądasz"</b> i inni będą chcieli znać sekret Twojego dobrego wyglądu i samopoczucia.`,
      ],
    },
    {
      question: `Ile kosztuje zabieg?`,
      answer: [
        `Proszę o kontakt telefoniczny ze względu na okresowe promocje.`,
      ],
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container questions'>
            <ul className='threads'>
              {threadsList.map((item, index) => {
                return (
                  <li
                    className='thread'
                    key={`${item.question}akuKosThread${index}`}
                  >
                    <h1>{item.question}</h1>
                    <ul className='answers'>
                      {item.answer.map((answerItem, answerIndex) => {
                        return (
                          <li key={`${answerItem}akuKosAnswer${answerIndex}`}>
                            <ElementRef element='p' content={answerItem} />
                          </li>
                        );
                      })}
                    </ul>
                    {item.list && (
                      <ul className='benefits'>
                        {item.list.map((benefitItem, benefitIndex) => {
                          return (
                            <li
                              key={`${benefitItem}akuKosThreadBenefit${benefitIndex}`}
                            >
                              {benefitItem}
                            </li>
                          );
                        })}
                      </ul>
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
