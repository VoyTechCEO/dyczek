import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkuKosHeader from '@/components/akuKosHeader/AkuKosHeader';

interface Props {
  locale: string;
}

interface EffectImg {
  srcBefore: string;
  srcAfter: string;
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

  const imgList: EffectImg[] = [
    {
      srcBefore: `/img/akuKosBefore001.jpg`,
      srcAfter: `/img/akuKosAfter001.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore002.jpg`,
      srcAfter: `/img/akuKosAfter002.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore003.jpg`,
      srcAfter: `/img/akuKosAfter003.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore004.jpg`,
      srcAfter: `/img/akuKosAfter004.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore005.jpg`,
      srcAfter: `/img/akuKosAfter005.jpg`,
    },
  ];

  const commentsList = [
    `Jane Becker, kompozytorka i pianistka, obchodziła swe pięćdziesiąte urodziny u dermatologa, płacąc 1500 dolarów za zastrzyki z restylanu i botoksu. Już trzy miesiące później ich wygładzającego efektu nie było widać. Jane postanowiła więc wypróbować inny eliksir młodości: akupunkturę twarzy.`,
    `Podobnie jak wiele kobiet, które sięgnęły po akupunkturę w pościgu za pięknem, Becker miała nadzieję, że nakłucie strategicznych punktów twarzy będzie tańsze i da bardziej trwały efekt niż jej "urodzinowe" zastrzyki.`,
    `Jane, dziś 53-latka, zaczęła od dziesięciu sesji w ciągu pięciu tygodni (1000 dolarów), a teraz co miesiąc chodzi na sesje podtrzymujące efekty kuracji (105 dolarów za sesję). Według niej akupunktura jest nie tylko tania, ale opłaca się na wiele innych sposobów.`,
    `- Widzę różnicę w wyglądzie twarzy - mówi Jane, która chodzi do Stevena Sonmore'a, dyplomowanego akupunkturzysty z Minneapolis. - Wyglądam młodziej, skóra jest gładsza, rozjaśniona i jędrniejsza.`,
    `Pierwsi klienci, jak Becker, zaczęli rozpowiadać o zaletach tzw. liftingu twarzy akupunkturą. Przed rozdaniem Oscarów w 2005 roku ekipa akupunkturzystów zjechała do Soho House, stworzonego naprędce miejsca spotkań gwiazd w Los Angeles, te zaś ochoczo skorzystały z szansy na odświeżenie cery.`,
    `Teraz, dzięki dużo sprawniejszemu marketingowi, akupunktura kosmetyczna zaczęła przykuwać uwagę poważnej części pomarszczonych klientów. Jej holistyczne podejście podoba się zwłaszcza kobietom, które chcą powstrzymać oznaki starzenia, ale nie decydują się na operację czy zastrzyki z różnych chemikaliów.`,
    `Czy nazywa się to "odnową twarzy", "liftingiem akupunkturą" czy "akupunkturą kosmetyczną", cel jest jeden: usunięcie zmarszczek i napięcia mięśni, oraz poradzenie sobie z problemami zdrowotnymi, które nie pozwalają na uzyskanie pięknej, świeżej cery. Podobnie jak w przypadku tradycyjnych nakłuwań, wbijanie igieł w określone punkty stymuluje naturalne siły witalne ciała - zwane qi. Są jednak pewne dodatkowe korzyści.`,
    `Czy to naprawdę działa? To trzeba będzie udowodnić. Badania wykazały, że akupunktura jest skutecznym sposobem na pozbycie się napięć mięśniowych, chronicznego bólu, migren czy bólu pleców. Nie ma jednak żadnych sprawdzonych badań, które wykazywałyby, że akupunktura zmniejsza zmarszczki. Mimo to, w ciągu ostatnich lat zwiększyła się liczba miejsc, oferujących akupunkturę kosmetyczną.`,
    `- W całym kraju widać wzrost zainteresowania - mówi Martha Lucas, dyplomowana akupunkturzystka, która w roku 2003 pomogła stworzyć system akupunktury kosmetycznej Mei Zen (po chińsku znaczy to "piękna osoba". Lucas prowadzi seminaria, w których uczestniczy około 30 początkujących kosmetyczek. - Największym rynkiem było dotąd Los Angeles, ale teraz dzwonią już ludzie z całych Stanów.`,
    `Mary Elizabeth Wakefield, dyplomowana akupunkturzystka, która prowadziła wspomnianą imprezę przed Oscarową galą w 2005 roku, wyszkoliła ponad dwa tysiące nauczycieli w 40 krajach - praktykują oni teraz promowaną przez nią akupunkturę twarzy. Do dziś Wakefield wyszkoliła też ponad 1200 specjalistów, zaczynając od stu osób w roku 2001.`,
    `- Starożytni Chińczycy od wieków promowali zdrowie i urodę - mówi Mary. - Ale my przenieśliśmy to na nowy poziom.`,
    `Jedną z przyczyn sukcesu jest na pewno skuteczny marketing: na seminariach Lucas można się dowiedzieć, jak robić zdjęcia "przed" i "po", czy jak nawiązywać owocne relacje z dermatologami. Lucas rozdaje nawet T-shirty z napisem "Cosmetic Acupuncture Works" ("Akupunktura kosmetyczna działa" - przyp. tłum.)`,
  ];

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container results'>
            <h1>Rezultaty</h1>
            <p className='standard'>
              Akupunktura kosmetyczna zasadniczo nakłuwa punkty położone na
              mięśniach twarzy, w celu poprawy ich elastyczności, co daje efekt
              odmładzający twarzy. Ponadto nakłuwane są punkty na nogach,
              ramionach i tułowiu a celu zrównoważenia energii życia.
            </p>
            <p className='standard'>
              Badania opublikowane w Journal of Clinical Acupuncture w 1996r
              demonstrują, że na 300 osób, które otrzymały akupunkturę
              kosmetyczną, aż 90% zauważyły poprawę w wyglądzie skóry twarzy
              tylko po jednym zabiegu akupunktury kosmetycznej.
            </p>
            <p className='standard'>
              W czasie kuracji akupunkturą kosmetyczną klienci mogą nie tylko
              oczekiwać, że ich twarz będzie coraz bardziej promienista, ale
              zauważą zwiększone poczucie wewnętrznej harmonii i radości życia.
              Gazeta The Irish Times z uznaniem napisała o akupunkturze
              kosmetycznej: ,,opłacalna alternatywa do chirurgii kosmetycznej,
              zaś jej efekty nie ograniczają się jedynie do poprawienia wyglądu
              twarzy"
            </p>
            <ul className='images'>
              {imgList.map((item, index) => {
                return (
                  <li key={`${item.srcBefore}akuKosImage${index}`}>
                    <div className='preview'>
                      <img src={item.srcBefore} alt='Zdjęcie przed leczeniem' />
                      <p>Przed</p>
                    </div>
                    <div className='preview'>
                      <img src={item.srcAfter} alt='Zdjęcie po leczeniu' />
                      <p>Po</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h1>Wypowiedzi pacjentów</h1>
            <ul className='comments'>
              {commentsList.map((item, index) => {
                return <li key={`${item}akuKosComment${index}`}>{item}</li>;
              })}
            </ul>
            <p className='source'>
              Źródło:{' '}
              <a
                href='http://zdrowie.onet.pl/1470227,2039,,,,po_co_leki_dajcie_igly_,profilaktyka.html'
                target='_blank'
              >
                http://zdrowie.onet.pl/1470227,2039,,,,po_co_leki_dajcie_igly_,profilaktyka.html
              </a>{' '}
              [Dostęp 30.08.08]
            </p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuKos;
