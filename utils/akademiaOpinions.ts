interface Opinion {
  name?: string;
  text?: string;
  list?: string[];
}

interface Opinions {
  year: number;
  opinion: Opinion[];
}

interface OpinionsSection {
  question: string;
  declaration: string;
  opinions: Opinions[];
}

const akademiaOpinions: OpinionsSection[] = [
  {
    question: `Co było dla Państwa najbardziej wartościowe na podstawowym kursie chiropraktyki?`,
    declaration: `Otrzymane opinie absolwentów Akademii Chiropraktyki, które nie były edytowane.`,
    opinions: [
      {
        year: 2017,
        opinion: [
          {
            name: `Jerzy Filipek`,
            text: `Metodyka nauczania i wartość teorii.`,
          },
          {
            name: `Sylwia Górska`,
            text: `Techniki mobilizacyjne, które są wspaniałe dla usprawniania aparatu ruchu.`,
          },
          {
            text: `Dużo praktyki i mało gadania.`,
          },
          {
            text: `Ilość pokazywanych technik i pomoc w ich wykonywaniu (dokładne sprawdzanie). Uśmiech i pozytywna energia prowadzącego.`,
          },
        ],
      },
      {
        year: 2016,
        opinion: [
          {
            name: `Paweł`,
            text: `Kompleksowość oraz podejście holistyczne. Połączenie wiedzy teroetycznej z mobilizacja na stawach, pracą na tkance miękkiej oraz ćwiczenia usprawniające czynności układu ruchu. Mile zaskoczył mnie moduł 3 . Czaszka. Bardzo często pomijana w terapii. Praca i efekty na czaszce zrobiły na mnie duże wrażenie.`,
          },
          {
            name: `Mariusz`,
            text: `Przekazywana wiedza była bardzo specjalistyczna, na wysokim poziomie. Dużo praktyki. Wszystkie techniki mobilizacyjne mogliśmy przećwiczyć i częściowo wyuczyć się psychologii zabiegu. Wszystkie pytania, wątpliwości były całkowicie przerobione.`,
          },
          {
            name: `Renata`,
            text: `Zdobyta wiedza i umiejętności pozwolą na weryfikację podejścia lekarza do pewnych dolegliwości. Zdarza się często, że błądzi on i jedynym wyjściem z sytuacji jest przepisanie leku przeciwbólowego. Prowadzący zajęcia jest osobą o ponadprzeciętnej wiedzy, która umie przekazać, jest kompetentny, widać, że praca, która wykonuje jest jego pasją i umie zarazić pozytywna energią. Bardzo cenne porady z psychologii, marketingu i metodyki pracy.`,
          },
          {
            name: `Rafał Nowicki`,
            text: `Pasja prowadzącego; ilość technik i informacji; holistyczność; dogłębne podejście do fizjologii i anatomii człowieka; samorozwój krzewiony przez prowadzącego w uczestnikach szkolenia.`,
          },
          {
            name: `Laura`,
            text: `Najbardziej wartościowe na kursi było to, że kurs w dużej mierze polegał na praktyce oraz możliwości omówienia wszystkich problemów, które napotykaliśmy.`,
          },
          {
            name: `Sebastian Zieliński`,
            text: `Nauka bardzo bezpiecznych i skutecznych technik chiropraktycznych. Wartościowy był dla mnie ogrom wiedzy dr Dyczka i profesjonalne prowadzenie zajęć.`,
          },
          {
            name: `Krystian Nowak`,
            text: `Bardzo przystępny sposób przekazania wiedzy. Możliwość konsultacji z dr Dyczkiem.`,
          },
        ],
      },
      {
        year: 2011,
        opinion: [
          {
            name: `Anna Piaścik`,
            list: [
              `Zakres przekazanej wiedzy nie tylko z zakresu samych technik chiropraktycznych ale również tej holistycznej.`,
              `profesjonalizm, dokładność, poziom kursu.`,
              `Możliwość pracy z grupą w tak dobrze zorganizowany sposób.`,
            ],
          },
          {
            name: `Beata Jatkowska`,
            text: `Palpacja, praktyka i inspiracja.`,
          },
          {
            name: `Adam Kołakowski`,
            text: `Przypomnienie sobie anatomii palpacyjnej. Poznanie technik manualnych na całym ciele. nie tylko na kręgosłupie.`,
          },
          {
            text: `Precyzyjne zajęcia praktyczne.`,
          },
          {
            name: `Hanna Nowak`,
            text: `Filmowanie zajęć praktycznych wskazujące błędy techniczne.`,
          },
          {
            name: `Witold Przygoński`,
            text: `Zajęcia praktyczne.`,
          },
          {
            name: `Krystian Nowak`,
            text: `Bardzo przystępny sposób przekazania wiedzy. Możliwość konsultacji z dr Dyczkiem.`,
          },
        ],
      },
      {
        year: 2009,
        opinion: [
          {
            text: `"Poznanie nowych technik usprawniania, które zmieniły jakość mojej pracy. Holistyczne spojrzenie na pacjenta . człowieka, uświadomienie sobie ważności takiego spojrzenia i podejścia pracy z pacjentem. Ten kurs pobudził nie i zachęcił do dalszego rozwoju w tym kierunku."`,
          },
          {
            list: [
              `Wiedza teoretyczna i techniki wykorzystywane w terapii, atmosfera zajęć.`,
              `Poznanie właściwych ruchów pozwalających na ustawianie miednicy.`,
            ],
          },
          {
            list: [
              `Przed każdym modułem przygotowanie praktyczne (palpacja i poznawanie anatomii na sobie i innych).`,
              `Przygotowanie merytoryczne.`,
              `Czas dla każdego kursanta.`,
              `Bardzo miła atmosfera.`,
              `Mino, że egzaminy stresują to podnoszą range kursu i zmuszają uczestników do ćwiczeń.`,
            ],
          },
          {
            list: [
              `Kurs chiropraktyki spowodował, żę zmieniło się moje spojrzenie na organizm ludzki jako całość, dostrzegłem konieczność pracy na całym aparacie ruchu.`,
              `Nowe techniki mobilizacji znacznie wzbogaciły mój warsztat pracy`,
            ],
          },
          {
            name: `Józef Zaremba`,
            list: [
              `Inne całościowe spojrzenie na człowieka.`,
              `Możliwość pełniejszego oddziaływania na ustrój człowieka , szczególnie na system nerwowy.`,
            ],
          },
          {
            list: [
              `Dokładne i jasne w prosty sposób pokazane i wytłumaczone techniki mobilizacyjne i powtórka z anatomii.`,
              `Poznanie wielu innych ciekawych, a co najważniejsze skutecznych technik oddziałujących na pacjenta.`,
            ],
          },
          {
            name: `Roman Diechtiarow`,
            text: `Miła atmosfera, profesjonalizm prowadzącego, możliwości natychmiastowego zdobycia praktycznych umiejętności.`,
          },
        ],
      },
      {
        year: 2008,
        opinion: [
          {
            list: [
              `Profesjonalne zajęcia praktyczne.`,
              `Poznanie nowych technik terapii manualnej nigdy wcześniej nie poznanych.`,
              `Integralność metody, praca na miednicy, impuls chiropraktyczny i jego oddziaływanie na system energetyczny.`,
            ],
          },
          {
            name: `Vadym Gorshkov`,
            text: `"Techniki pracy manualnej, których nie spotkałem na wcześniejszych kursach. Delikatne mobilizacje czaszki, miednicy i kręgosłupa są bardzo dobrym narzędziem pracy u pacjentów z dużymi zmianami dystroficznymi i degeneracyjnymi układu kostnego."`,
          },
        ],
      },
      {
        year: 2007,
        opinion: [
          {
            name: `Marzena Waligóra`,
            list: [
              `Precyzyjność (duży nacisk kładziony na precyzyjne mobilizacje).`,
              `Dużo czasu na zajęcia praktyczne.`,
              `Spokój i opanowanie prowadzącego.`,
            ],
          },
          {
            list: [
              `Uzyskanie wiedzy i umiejętności wykonywania mobilizacji oraz ćwiczenia praktyczne.`,
              `Cenne informacje z dziedzin pokrewnych.`,
            ],
          },
          {
            text: `Wiedza i doświadczenie . to profesjonalne i życiowe.`,
          },
          {
            name: `Katarzyna Ziółkowska`,
            list: [
              `Doświadczenie zawodowe wymienione między uczestnikami kursu.`,
              `Otwartość i ciekawość prowadzącego na relacje ofiara . pacjent (nauka podejścia do pacjenta).`,
              `Wprowadzenie pkcz prowadzącego do innego postrzegania świata: .ból. to przyjaciel człowieka.`,
            ],
          },
          {
            name: `Marek Szymański`,
            text: `"Duża ilość zajęć praktycznych, wspaniała atmosfera i świetna organizacja. Przejrzyste i wyczerpujące tłumaczenia działania mobilizacji chirorpaktycznych."`,
          },
          {
            name: `Roman Wojtarowicz`,
            text: `"Nowe delikatne techniki. Praca na całym aparacie ruchu. Metoda .traktuje. organizm ludzki jako całość i tak na niego oddziałuje, co w moim dotychczasowym doświadczeniu spotykam po raz pierwszy. Dało mi to nowe spojrzenie na powstanie patologii w aparacie ruchu i nie tylko, jak również na rolę profilaktyki zdrowotnej i jej role dla zachowania i utrzymania zdrowia i długowieczności."`,
          },
          {
            name: `Aleksander Kubus`,
            text: `"Przekazywana wiedza i możliwość zastosowania technik w pracy z dziećmi z wadami postawy."`,
          },
          {
            name: `Piotr Hoffman`,
            text: `"Unikalność prezentowanych technik przy jednoczesnej bardzo dużej ich skuteczności przy bardzo ważnej dla pacjenta bardzo małej inwazyjności."`,
          },
        ],
      },
      {
        year: 2006,
        opinion: [
          {
            name: `Anonimy`,
            list: [
              `Wszystko. Wkłady teoretyczne i praktyczne zajęcia.`,
              `Traktowanie ciała człowieka jako całość, efektywne uwalnianie blokad, przez co chiropraktyka daje szansę organizmowi na samoleczenie.`,
              `Ważna dla mnie jest dobrze wyłożona teoria, szczególnie przekazana przez osoby doświadczone. Bardzo sobie cenię wyniesione wiadomości teoretyczne.`,
              `Mobilizacje miednicy.`,
              `Duża ilość nowych technik i profesjonalne prowadzenia zajęć.`,
              `Ćwiczenia z miednicy i techniki integracyjne oraz kręgosłup. Nagrywanie naszych ćwiczeń i potem analiza błędów.`,
              `Spojrzenie na pacjenta całościowo, globalnie i szukanie przyczyny nie tylko w chorym narządzie czy kończynie ale w całym aparacie ruchu i układzie nerwowym.`,
            ],
          },
        ],
      },
    ],
  },
];

export default akademiaOpinions;
