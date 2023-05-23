import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkuChiHeader from '../../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const AkuChi: NextPage = () => {
  return (
    <>
      <HeadSet />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent>
          <article className={`container akuChiro-container qualifications`}>
            <section>
              <div className='intro'>
                <h1>KWALIFIKACJE</h1>
                <h4>Nazywam się Henryk Dyczek.</h4>
                <p>
                  Jestem Dyplomowanym Akupunkturzystą i Chiropraktykiem
                  zrzeszonym w Polskim Towarzystwie Medycyny Manualnej, British
                  Acupuncture Council.
                </p>
                <p>
                  Moja droga do obecnie wykonywanych zawodów rozpoczęła się
                  kilkanaście lat temu wyjazdem do Wielkiej Brytanii na kurs
                  języka angielskiego. Tam spotkałem studentów akupunktury i po
                  raz pierwszy widziałem rezultaty leczenia akupunkturą. Pod
                  wpływem tego doświadczenia oraz wcześniejszych zainteresowań
                  niekonwencjonalnymi środkami leczenia, a także potrzeby
                  zaspokojenia wewnętrznej chęci pomocy ludziom chorym, po
                  ukończeniu kursu językowego rozpocząłem studia medycyny
                  niekonwencjonalnej.
                </p>
              </div>
              <img src='/img/dyczekHenryk.jpg' alt='Henryk Dyczek' />
            </section>
            <p>
              W College of Traditional Acupuncture w Leamington Spa, w 1988
              uzyskałem licencjat z Akupunktury. Od 1987 roku leczyłem
              akupunkturą, a od 1988 samodzielnie prowadziłem przychodnię
              niedaleko Oxfordu. Jednocześnie odbywałem dalsze studia w tej
              samej uczelni i zdobyłem w 1990 roku tytuł Advanced Licentiate in
              Acupuncture, a w 1992 roku uwieńczyłem studia akupunktury
              uzyskując tytuł Acupuncture Master.
            </p>
            <p>
              Pracując z pacjentami spostrzegłem, że wielką pomocą w mojej pracy
              byłaby umiejętność manipulacji na układzie ruchowym (terapia
              manualna). W konsekwencji w 1991 roku podjąłem studia w Oxford
              College of Chiropractic, które ukończyłem w 1995 roku otrzymując
              Diploma in Chiropractic. Następny rok poświęciłem podyplomowym
              studiom chiropraktyki w Londynie. W okresie studiów
              chiropraktycznych rozwijałem również swoje umiejętności w zakresie
              pracy z energia Qi, studiując w latach 1991-1995 Qigong pod
              nadzorem Zhixing Wang.
            </p>
            <p>
              W kolejnym etapie pracy klinicznej zauważyłem, że polepszenie
              efektów pracy klinicznej można zwiększyć zastosowaniem ziół
              chińskich. Toteż w 1996r rozpocząłem studia Tradycyjnego
              Ziołolecznictwa Chińskiego w College of Integrated Chinese
              Medicine w Reading, Wielka Brytania.
            </p>
            <p>
              W 1998 roku po czternastu latach studiów i pracy klinicznej w
              Wielkiej Brytanii powróciłem do swojej Ojczyzny, gdzie otworzyłem
              gabinet w Przysieku koło Torunia.
            </p>
            <p>
              Od 1999 roku kształcę swoich następców w utworzonej przez siebie{' '}
              <Link href='/akademia_chiropraktyki/' target='_blank'>
                Akademii Chiropraktyki
              </Link>{' '}
              .
            </p>
            <p>
              W procesie ciągłego kształcenia zawodowego uzyskałem w 2000 roku
              stopień naukowy B.A. (Chiropractic) Oxford Brookes University i
              stałem się jednym z nielicznych w Europie chiropraktyków z
              dyplomem uniwersyteckim w tej dziedzinie. Dla lepszego zrozumienia
              reakcji ciała chorych podczas zabiegów chiropraktycznych w 2002
              roku ukończyłem dwuletnie szkolenie w zakresie Terapii
              Czaszkowo-Krzyżowej z dr Andrea Axt z Montrealu, Kanada.
            </p>
            <p>
              Ucząc chiropraktyki w założonej przeze mnie w 1999 Akademii
              Chiropraktyki zauważyłem potrzebę zdobycia kwalifikacji
              nauczycielskich, co zaowocowało w 2003r Licencjatem z Języka
              Angielskiego z Nauczycielskiego Kolegium Języków Obcych w Toruniu
              i Uniwersytetu Mikołaja Kopernika w Toruniu oraz magistrem Języka
              Angielskiego i Zastosowań Komputerowych z Uniwersytetu Łódzkiego i
              Master of Arts in Computer-Based English Language Studies w
              University of Lancaster, Wielka Brytania.
            </p>
            <p>
              W czerwcu 2006r wspólnie z Januszem Zerbst otworzyłem Szkołę
              Akupunktury Tradycyjnej w Bydgoszczy.
            </p>
            <p>
              W styczniu 2013r uzyskałem stopień naukowy doktora nauk medycznych
              na Wydziale Lekarskim Uniwersytetu Medycznego w Łodzi.
            </p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuChi;
