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
  {
    question: `Czy zarekomendowalibyście ten kurs chiropraktyki innym? Jeżeli tak, to dlaczego?`,
    declaration: `Otrzymane opinie absolwentów Akademii Chiropraktyki, które nie były edytowane.`,
    opinions: [
      {
        year: 2017,
        opinion: [
          {
            name: `Jerzy Filipek`,
            text: `Otrzymałem wiedzę, która w sposób komplementarny przygotował mnie do świadczenia zabiegów chiropraktycznych.`,
          },
          {
            text: `Tak. Przekazywana wiedza jest bardzo przydatna dla osób, które chcą pomagać innym.`,
          },
          {
            name: `Mariusz Antonowicz`,
            text: `Tak ponieważ, a kursie przekazywana jest:`,
            list: [
              `użytkowa wiedza`,
              `natychmiastowa możliwość wdrożenia do własnej praktyki`,
              `bezpieczne, a spektakularne techniki`,
              `bardzo szeroki zakres wiedzy`,
              `techniki mało znane, a zarazem bardzo skuteczne`,
              `dużo elementów anatomii palpacyjnej.`,
            ],
          },
          {
            name: `Andrzej Szurlej`,
            text: `Tak, ponieważ na kursie jest:`,
            list: [
              `wiele technik do pracy z narządem ruchu`,
              `wiedza przekazywana jest w sposób prosty i zrozumiały`,
              `podsumowania ułatwiające utrwalenie zdobytej wiedzy i umiejętności.`,
            ],
          },
        ],
      },
      {
        year: 2016,
        opinion: [
          {
            name: `Paweł`,
            text: `Zdecydowanie tak. Pełen profesjonalizm prowadzącego kurs. Spokój, opanowanie, ogromna wiedza wsparta doświadczeniem, cierpliwość wobec kursantów, a przede wszystkim miła atmosfera i zdyscyplinowanie na kursie. W pięć zjazdów została przekazana bardzo duża wiedza i wiele nowych narzędzi terapeutycznych, a także nowe holistyczne spojrzenie na cały organizm ludzki. Bardzo mi się podobało, że na każdym następnym module można było ćwiczyć mobilizacje z poprzednich modułów i wyeliminować błędy pod okiem prowadzącego. Bardzo dużym plusem jest logiczna kolejność poszczególnych modułów . wszystko spina się w jedna wspaniałą całość. Możliwość zapisania się do stowarzyszenia, dalszy udział w szkoleniach i zjazdach to kolejny plus tego kursu.`,
          },
          {
            name: `Renata`,
            text: `Tak. Większa ilość osób powinna poznać tę metodę, aby móc pomagać w zwalczaniu bólu bez użycia środków przeciwbólowych, które są przyczyną wielu innych groźnych chorób. Wiedza przekazana jest w bardzo przystępny sposób, a nauka był przyjemnością.`,
          },
          {
            name: `Rafał Nowicki`,
            text: `Chiropraktyka prezentowana przez dr Henryka Dyczka oraz sama osoba prowadzącego zmienia pogląd na życie, ciało człowieka oraz pracę z pacjentem. Pozwala to zgłębić wiele aspektów leczenia człowieka.`,
          },
          {
            name: `Laura`,
            text: `Zarekomendowała bym ten kurs osobom, które pragną pomagać innym i dbać swoją edukację.`,
          },
          {
            name: `Krystian Nowak`,
            text: `Polecam każdemu podstawowy kurs chiropraktyki, ponieważ otwiera drzwi w kierunku prawidłowej rehabilitacji i praca z ciałem człowieka.`,
          },
          {
            name: `Sebatian Zieliński`,
            text: `Tak, jest bardzo profesjonalnym i dobrze zorganizowanym kursem. Dobra cena w stosunku do innych .pseudo-kursów.`,
          },
        ],
      },
      {
        year: 2013,
        opinion: [
          {
            name: `Sebastian`,
            text: `Tak, zarekomendowałbym kurs:`,
            list: [
              `ze względu na skuteczność metod, których się nauczyłem,`,
              `dobrą cenę kursu,`,
              `kompetencje dydyaktyczne i skuteczność terapeutyczna prowadzącego`,
              `rezultaty terapeutyczne, które osiągam podczas praktyki tego co się nauczyłem,`,
              `dobrą atmosferę podczas zajęć`,
            ],
          },
        ],
      },
      {
        year: 2011,
        opinion: [
          {
            name: `Witold Przygoński`,
            text: `"Tak. Bardzo treściwy."`,
          },
          {
            name: `Hanna Nowak`,
            text: `"Uważam, ze ta terapia jest najskuteczniejsza. Sprawdziłam to przeprowadzając te zabiegi w prowadzonym przez siebie gabinecie. Będę zalecała zainteresowanym."`,
          },
          {
            text: `"Tak, ponieważ można się nauczyć ciekawych technik chiropraktycznych."`,
          },
          {
            name: `Adam Kołakowski`,
            text: `"Tak, osobom które chciały by rozpocząć pracę w kierunku terapii manualnej. Myślę, że warto jako pierwszą z technik terapii manualnej poznać właśnie chiropraktykę."`,
          },
          {
            name: `Elżbieta Sowa`,
            text: `"Tak, dlatego, że jest to wiedza, którą może posiąść każdy, kto jest zainteresowany taką dziedzina. Jest podana w sposób przystępny, a jednocześnie są to wiadomości bardzo aktualne. Praca w zespołach daje możliwość nabrania doświadczenia i wymienienia się odczuciami."`,
          },
          {
            name: `Beata Jatkowska`,
            text: `"Tak. Uważam, że taką wiedzę powinien mieć każdy człowiek (o swoim ciele i aparacie ruchu)."`,
          },
          {
            name: `Anna Piaścik`,
            text: `"Tak, ze względu na wyjątkową skuteczność w usprawnianiu pacjentów. Poza tym jest to wspaniała możliwość uświadamiania ludziom, że zdrowie należy postrzegać w 3 aspektach: fizycznym, emocjonalnym i duchowym."`,
          },
        ],
      },
      {
        year: 2010,
        opinion: [
          {
            name: `Roman Diechtiarow`,
            text: `"Tak. Kurs daje możliwość innego spojrzenia na dolegliwości w zakresie aparatu ruchu i inne możliwości zareagowania, które mogą uchronić chorego przed zabiegiem operacyjnym."`,
          },
          {
            text: `"Tak, gdyż wiele osób powinno mieć pojęcie o takich sposobach pomocy innym."`,
          },
          {
            text: `"Tak, uważam (jako przyszła rehabilitantka), że ta umiejętność każdy fizjoterapeuta powinien posiąść, aby osiągnąć lepsze efekty pracy i lepiej rozumieć mechanikę ciała."`,
          },
          {
            name: `Józef Zaremba`,
            text: `"Tak. Myślę, że przydałby się każdemu praktykującemu masażyście. Dlatego, że chiropraktyka podkreśla sens i celowość oddziaływania na ustrój człowieka, także dlatego, że wiąże w bardzo przystępny sposób fizyczność terapii z psychika pacjenta."`,
          },
          {
            text: `"Chętnie zarekomenduję ten kurs znajomym fizjoterapeutom ze względu na nowe spojrzenia na sposób pracy z pacjentem i nowe możliwości jakie daje chiropraktyka."`,
          },
          {
            text: `"Tak, pełny profesjonalizm, jeżeli chodzi o efekty to muszę trochę popracować tymi technikami. Z innych źródeł wiem, ze działają."`,
          },
          {
            text: `"Jak najbardziej tak. Odpowiednie prowadzenie, dyscyplina i właściwa ilość czasu dla każdego elementu dają właściwy obraz kursu, a umiejętności są czysto praktyczne i od razu można z nich korzystać bez zbędnego teatru, itd."`,
          },
          {
            text: `"Tak, dlatego że jest to bardzo dobra alternatywa dla kursów, które wymagają np. techniki masażu lub dyplomu fizjoterapeuty."`,
          },
          {
            text: `"Oczywiście, że tak. Z powodu jakości kursu. Solidność, rzetelność i klasa, to cechy którymi określiłabym sposób nauczani i przekazywania wiedzy i doświadczenia oraz traktowanie uczestników przez prowadzącego kurs. Jakby .przemodelował. moje podejście do odzyskiwania zdrowia i profilaktyki."`,
          },
        ],
      },
      {
        year: 2008,
        opinion: [
          {
            name: `Vadym Gorshkov`,
            text: `"Tak, bo to jedyny kurs w Rzeczpospolitej Polskiej, który prezentuje metodę MTC bardzo przydatną w kompleksowej terapii chorób narządu ruchu."`,
          },
          {
            text: `"Ta. Nowe, delikatne i efektywne narzędzie pracy."`,
          },
          {
            text: `"Tak. Nowe techniki, bezpieczne .leczenie., techniki bezbolesne."`,
          },
          {
            text: `Tak. Mobilizacje MTC są bardzo bezpieczne i oddziaływają na cały aparat ruchu. Bardzo dobre efekty u pacjentów w zaawansowanym wieku jak również w przypadku poważnych schorzeń kręgosłupa (przepuklina, itp.). Impuls chiropraktyczny jest delikatny, a zarazem efektywny i nie powoduje zaostrzenia dolegliwości.`,
          },
          {
            list: [
              `Tak, wydajna metoda i przyjazna dla pacjenta i terapeuty.`,
              `Uważam, że kurs jest prowadzony profesjonalnie i jest bardzo rozwijający.`,
            ],
          },
        ],
      },
      {
        year: 2007,
        opinion: [
          {
            name: `Piotr Hoffman`,
            text: `"Tak z pełna odpowiedzialnością. Pomimo niedosytu osób po pierwszych modułach, ci którzy dotrwali do końca, między innymi ja czuję pełną satysfakcję. A co chyba najważniejsze osobowość prowadzącego oraz jego sposób przekazu pozostawi we mnie niezapomniane wrażenie."`,
          },
          {
            name: `Aleksander Kubus`,
            text: `"Przez skuteczność i delikatność technik MTC."`,
          },
          {
            name: `Roman Wojtarowicz`,
            list: [
              `Zdecydowanie - Tak!`,
              `Unikalne delikatne techniki. Terapia do zastosowania u pacjentów a w każdym wieku oraz pacjentów .wrażliwych. na wszelkiego rodzaju manipulacje na aparacie ruchu. Również ze względu na pracę na całym układzie ruchu. Jego wpływie na organizm ludzki jako całość. Profilaktycznego oddziaływania na zdrowie i zapobieganie powstania patologii oraz różnego rodzaju schorzeń.`,
            ],
          },
          {
            name: `Marek Szarzyński`,
            text: `Informacje o kursie przekazałbym dalej jak najbardziej. Chiropraktyka jest techniką bardzo dobrze działającą na całym aparacie mięśniowo-szkieletowym. Sam odczułem pozytywne efekty terapii i gorąco polecam.`,
          },
          {
            name: `Katarzyna Ziółkowska`,
            text: `Tak. Uważam iż ludzie, którzy niosą pomoc innym powinni cały czas się rozwijać, Nabywanie nowych doświadczeń uczy pokory i szacunku dla nowych metod będących czasem sposobem życia dla innych. Zrozumienie drugiego człowieka to połowa sukcesu.`,
          },
          {
            text: `Tak bo każdy dobry terapeuta powinien ciągle się szkolić. Chiropraktyka jest to czego mi brakowało i jest uzupełnieniem mojego doświadczenia terapeutycznego.`,
          },
          {
            text: `Tak. Kurs jest bardzo dobrze przygotowany merytorycznie i organizacyjnie. Pozwala na uzyskanie umiejętności, które natychmiast można wykorzystać w praktyce.`,
          },
          {
            name: `Marzena Waligóra`,
            text: `Tak, ponieważ są to bardzo skuteczne i bezpieczne mobilizacje. Im więcej osób wykształconych w tym kierunku, tym większa będzie świadomość innych jak ważna jest profilaktyka i ruch.`,
          },
        ],
      },
      {
        year: 2006,
        opinion: [
          {
            list: [
              `Tak - dlatego, że jest to wspaniała metoda.`,
              `Tak - wysoka skuteczność.`,
              `Tak - jest to wiedza unikalna. Każdy terapeuta powinien taką posiadać.`,
              `Już poleciłem. Mam nadzieję, że skorzystają.`,
              `Tak. Ponieważ chiropraktyka jest bezpieczna metodą pracy z chorymi.`,
              `Ze względu na wiadomości z ustawiania miednicy.`,
              `Myślę, że tak, gdyż jest to terapia, która przynosi efekty, a sposób, w który się wykonuje mobilizację jest delikatny. Techniki nie wywołują bólu, a co najważniejsze nie grożą .kontuzjami. spowodowanymi naszą ingerencją.`,
            ],
          },
        ],
      },
    ],
  },
];

export default akademiaOpinions;
