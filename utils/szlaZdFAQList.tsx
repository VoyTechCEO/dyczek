import React from 'react';

interface FaqItem {
  question: string;
  answer: JSX.Element;
}

const faqList: FaqItem[] = [
  {
    question: `Zwracam uwagę na to, co jem i z jakich źródeł pochodzi mój
        pokarm. Czy to wystarczy, aby cieszyć się dobrym zdrowiem?`,
    answer: (
      <>
        <p>
          W opinii dr Rath, pioniera Medycyny Komórkowej (
          <a href='www.rath-eduserv.com'>www.rath-eduserv.com</a>), ,,nie
          powinniśmy się dać zwieść samozwańczym apostołom diety i mistrzom
          jogi" (Rath, 2007:247). Źródłem zdrowia człowieka jest zapewnienie
          każdej komórce człowieka wystarczającej ilości składników pokarmowych,
          tj. makroelementów (białka, węglowodany i tłuszcze) i mikroelementów
          (witaminy, minerały, pierwiastki śladowe i aminokwasy) (Rath, 2007).
        </p>
        <p>
          <b>
            Zdrowie i choroba określone są na poziomie milionów komórek
            tworzących nasze ciało i organy (Rath, 2007:225)
          </b>
        </p>
      </>
    ),
  },
  {
    question: `Co to jest Medycyna Komórkowa?`,
    answer: (
      <>
        <p>
          Medycyna Komórkowa jest nauką, która analizuje potrzeby pokarmowe
          komórki i wskazuje na potrzebę uzupełniania współczesnego pokarmu
          mikroelementami, gdyż pokarm ten jest zubożony. Źródłem życia jest
          energia (ATP) produkowana przez komórkę. Niedożywiona komórka
          produkuje za mało energii dla życia. Jakże często pierwszym objawem
          choroby jest uskarżanie się na brak energii. Jest to sygnał, że Twoje
          komórki są niedożywione.
        </p>
        <p>
          <b>mało energii życia = początek choroby</b>
        </p>
      </>
    ),
  },
  {
    question: `Jak wytłumaczyć, że w przeszłości ludzi nie połykali mikroelementów i cieszyli się dobrym zdrowiem?`,
    answer: (
      <>
        <p>
          W przeszłości pokarm posiadał więcej mikroelementów. Od lat 60-tych
          ubiegłego stulecia wielkotowarowa produkcja żywności, co oznacza: z
          najmniejszej połaci gleby wyprodukować jak najszybciej i jak
          najwięcej, powoduje, że współczesny pokarm posiada tylko nikły procent
          wartości odżywczej w porównaniu z tym, co posiadał kiedyś. Ponadto
          jest skażony nawozami sztucznymi i środkami ochrony roślin.
        </p>
      </>
    ),
  },
  {
    question: `Wszystkie warzywa i owoce, które konsumuję, produkuje sam. Nie używam nawozów sztucznych, ani chemicznych środków ochrony roślin. Czy zatem one również są niepełnowartościowe?`,
    answer: (
      <>
        <p>
          Roślina, aby się rozwijać potrzebuje wodę. Zazwyczaj jest to woda
          pochodząca z opadów deszczu. Okazuje się, że woda jest nośnikiem
          informacji o środowisku, w którym przebywa. ,,Można powiedzieć, że
          woda jak taśma magnetyczna zapisuje rezonans magnetyczny innych
          substancji i w ten sposób absorbuje właściwości innych substancji,
          sama je przejmuje - można by rzec małpuje i przekazuje je jako własne.
          Można to wyjaśnić w ten sposób, ze woda zatrzymuje informacje
          zanieczyszczonych substancji w swojej strukturze cząsteczkowej, tak że
          ich właściwości są nadal widoczne, nawet jeśli woda zmieniła formę"
          (Higa, 2003:138). Tradycyjnie woda wyparowując była oczyszczana przez
          promienie słoneczne w wyższych warstwach atmosfery. Obecnie wyższe
          warstwy atmosfery są tak zanieczyszczone, że oczyszczona para wodna,
          czyli woda, zostaje zanieczyszczona zanim opadnie na ziemię w postaci
          deszczu. Toteż problem zanieczyszczenia wody jest bardzo poważny.
          Konsekwencją tego jest powszechne zatrucie gleb wodą deszczową w
          mniejszym, bądź też większym stopniu. Zatrucie gleby obniża wartości
          odżywcze rosnących na niej roślin. W Tabeli 1 zostały przedstawione
          zawartości kilku istotnych mikroelementów potrzebnych dla zdrowia
          komórki, czyli produkcji energii życia, w latach 1985 i 2002. Dane z
          2002r w porównaniu z 1985 r. są już i tak niepokojące. Od tego czasu
          zawartość mikroelementów zapewne jeszcze bardziej się obniżyła, gdyż
          chemizacja rolnictwa raczej uległa zwiększeniu. Może tutaj należy
          poszukiwać zwiększenia liczby zachorowań na nowotwory, alergie, etc.
        </p>
        <p>
          <b>
            Związki mineralne i witaminy, zawartość w miligramach na 100g
            produktu spożywczego{' '}
          </b>
        </p>
        <table>
          <tr>
            <th>Produkt</th>
            <th>Składnik</th>
            <th>1985</th>
            <th>2002</th>
            <th>Różnica</th>
          </tr>
          <tr>
            <th colSpan={5}>Owoce</th>
          </tr>
          <tr>
            <td>Jabłka</td>
            <td>Witamina C</td>
            <td>5</td>
            <td>2</td>
            <td>-60%</td>
          </tr>
          <tr>
            <td rowSpan={4}>Banany</td>
            <td>Wapń</td>
            <td>8</td>
            <td>7</td>
            <td>-12%</td>
          </tr>
          <tr>
            <td>Kwas foliowy</td>
            <td>23</td>
            <td>5</td>
            <td>-79%</td>
          </tr>
          <tr>
            <td>Magnez</td>
            <td>31</td>
            <td>24</td>
            <td>-23%</td>
          </tr>
          <tr>
            <td>Witamina B6</td>
            <td>330</td>
            <td>18</td>
            <td>-95%</td>
          </tr>
          <tr>
            <td rowSpan={2}>Truskawki</td>
            <td>Wapń</td>
            <td>21</td>
            <td>12</td>
            <td>-43%</td>
          </tr>
          <tr>
            <td>Witamina C</td>
            <td>60</td>
            <td>18</td>
            <td>-87%</td>
          </tr>
          <tr>
            <th colSpan={5}>Warzywa</th>
          </tr>
          <tr>
            <td rowSpan={3}>Brokuły</td>
            <td>Wapń</td>
            <td>103</td>
            <td>28</td>
            <td>-73%</td>
          </tr>
          <tr>
            <td>Kwas foliowy</td>
            <td>47</td>
            <td>18</td>
            <td>-62%</td>
          </tr>
          <tr>
            <td>Magnez</td>
            <td>24</td>
            <td>11</td>
            <td>-55%</td>
          </tr>
          <tr>
            <td rowSpan={4}>Fasola</td>
            <td>Wapń</td>
            <td>56</td>
            <td>22</td>
            <td>-51%</td>
          </tr>
          <tr>
            <td>Kwas foliowy</td>
            <td>39</td>
            <td>30</td>
            <td>-23%</td>
          </tr>
          <tr>
            <td>Magnez</td>
            <td>26</td>
            <td>18</td>
            <td>-31%</td>
          </tr>
          <tr>
            <td>Witamina B6</td>
            <td>140</td>
            <td>32</td>
            <td>-77%</td>
          </tr>
          <tr>
            <td rowSpan={2}>Kartofle</td>
            <td>Wapń</td>
            <td>14</td>
            <td>3</td>
            <td>-78%</td>
          </tr>
          <tr>
            <td>Magnez</td>
            <td>27</td>
            <td>14</td>
            <td>-48%</td>
          </tr>
          <tr>
            <td rowSpan={2}>Marchew</td>
            <td>Wapń</td>
            <td>37</td>
            <td>28</td>
            <td>-24%</td>
          </tr>
          <tr>
            <td>Magnez</td>
            <td>21</td>
            <td>6</td>
            <td>-75%</td>
          </tr>
          <tr>
            <td rowSpan={2}>Szpinak</td>
            <td>Magnez</td>
            <td>62</td>
            <td>15</td>
            <td>-76%</td>
          </tr>
          <tr>
            <td>Witamina C</td>
            <td>61</td>
            <td>18</td>
            <td>-65%</td>
          </tr>
        </table>
        <h5>Tabela 1. Owoce i warzywa wczoraj i dziś</h5>
        <h5>
          Źródło: 1985 Geigy (Szwajcaria) 1996 oraz 2002 sanatorium Szwarcwald
          Oberthal
        </h5>
        <p>
          Czy sądzą Państwo, w świetle tych informacji, że nasza dieta w pełni
          zaspokoi zapotrzebowanie naszego organizmu na mikroelementy (witaminy
          i minerały)? Odpowiedz na to pytanie nasuwa się sama. Dlatego już
          teraz musimy zadbać o mikroelementy, jakie dostarczamy do naszego
          organizmu. I nie chodzi tu tylko o samo dostarczenie witamin i
          minerałów, ale również o jakość i odpowiednią ilość witamin.
        </p>
      </>
    ),
  },
  {
    question: `Jakie mogą być pierwsze objawy niedoboru mikroelementów w naszym pokarmie?`,
    answer: (
      <>
        <p>
          Zazwyczaj pierwszym objawem niedoboru mikroelementów w naszym pokarmie
          jest brak energii życia i pogorszone samopoczucie. Mikroelementy są
          niezbędne do produkcji energii (ATP) w komórce. Energia ta jest
          energią życia. W następnej kolejności pojawia się objawy chorób
          generowanych przez stres środowiska, w którym żyjemy oraz inne
          dolegliwości związane z uwarunkowaniami genetycznymi.
        </p>
      </>
    ),
  },
  {
    question: `Dlaczego rządy państw nie dbają o to, aby produkowany pokarm był zdrowy?`,
    answer: (
      <>
        <p>
          Odpowiedź na to pytanie jest bardzo trudna, ale można snuć kilka
          hipotez:
        </p>
        <ul>
          <li>
            Być może istnieją korporacje, którym zależy na tym, aby było coraz
            więcej ludzi chorych, których trzeba będzie podtrzymywać przy życiu,
            a to kosztuje. Koszty leczenia pokrywają podatnicy ze swoich
            podatków oraz ze swoich własnych oszczędności. Politycy mogą być
            sponsorowani przez korporacje, o których mowa, zatem nie jest w ich
            interesie osobistym, aby zadbać o zdrowie narodu, którym rządzą.
          </li>
          <li>
            Może komuś zależy, aby zmniejszyć liczebność mieszkańców kuli
            ziemskiej. Mówi się ostatnio bardzo dużo o przeludnieniu i że
            szkodzi ono ekologii Ziemi.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: `Czy można zatem żyć bez połykania mikroelementów?`,
    answer: (
      <>
        <p>
          Z pewnością tak! Jednakże można być bardziej twórczym, produktywnym i
          dłużej zachować wigor życia jeżeli dostarczy się komórkom organizmu
          niezbędnych mikroelementów do optymalnej produkcji energii życia.
        </p>
      </>
    ),
  },
  {
    question: `Jaki styl życia wymusza wprowadzenie dodatkowych mikroelementów do konsumowanej pokarmu?`,
    answer: (
      <>
        <p>
          Pośpiech, dyspozycyjność, dzwoniące telefony powodują stres, który
          zwiększa zapotrzebowanie na mikroelementy. Ich brak w naszym pokarmie
          powoduje wypalenie naszego organizmu, tzw. burnout, które jest bardzo
          trudne i długie w leczeniu. Niestety, kończy się on często zawałem,
          nowotworem, załamaniem psychicznym czy stwardnieniem
          rozsianym.Organizm ludzki można porównać do silnika. Im lepsze paliwo,
          czyli pokarm dla komórki dostarczymy, tym dłużej będzie on działał bez
          zepsucia, czyli choroby.
        </p>
        <p>
          <b>
            Im większy stres, tj. obciążenie organizmu człowieka - tym większe
            zapotrzebowanie na energię, czyli mikroelementy potrzebne do jej
            produkcji.
          </b>
        </p>
      </>
    ),
  },
  {
    question: `Od jakiego wieku powinno się zacząć uzupełniać dietę mikroelementami?`,
    answer: (
      <>
        <p>
          Zabrzmi to może tendencyjnie, ale uzupełnianie pokarmu dodatkowymi
          mikroelementami najlepiej rozpocząć przed planowaniem poczęcia dziecka
          zarówno u kobiety jak i mężczyzny. Co trzeci noworodek rodzi się z
          alergią. Skolioza noworodkowa występuje coraz częściej! Można
          przypuszczać, że brak wszystkich mikroelementów w pokarmie matki
          będzie miał negatywny wpływ na prawidłowy rozwój dziecka w jej łonie.
          W czyim interesie może być rodzenie się dzieci takich jak na zdjęciu
          obok (Rys. 1). Zobacz również:{' '}
          <a href='http://www.chiropraktycy.pl/'>
            http://www.chiropraktycy.pl/
          </a>{' '}
          zakładka <i>publikacje</i> prezentacja: 10. Skolioza idiopatyczna
          boczna - ukryta przyczyna (2007).
        </p>
        <img src='/img/skolioza.jpg' alt='Skolioza' />
        <h5>Rys. 1.</h5>
      </>
    ),
  },
  {
    question: `Z jakiego źródła nabywać mikroelementy / suplementy?`,
    answer: (
      <>
        <p>
          Dobre źródło dostawy mikroelementów /suplementów to takie, z którego
          się osobiście korzysta przynajmniej 1.5 roku i zauważa się u siebie
          pozytywne zmiany w wielu aspektach swojego zdrowia oraz nie zamierza z
          niego rezygnować.
        </p>
        <p>
          Na co koniecznie trzeba zwrócić uwagę przy wyborze mikroelementów /
          suplementów:
        </p>
        <ul>
          <li>
            Mikroelementy powinny koniecznie być pochodzenia naturalnego, a nie
            syntetycznego. Mikroelementy syntetyczne są rozpoznawane przez
            organizm ludzki jako ciało obce i muszą zostać zagospodarowane
            tworząc często związki toksyczne. Ponadto, wchłanialność
            mikroelementów syntetycznych wg różnych źródeł waha się zaledwie w
            granicach 3-10%.
          </li>
          <li>
            Producent mikroelementów powinien stosować najwyższe procedury
            jakości, tzw. 6S (Selection, Sourcing, Structure, Standardization,
            Safety, Substantiation), czyli (1) stosować selekcję w doborze
            bioaktywnych składników, (2) surowiec powinien być najwyższej
            jakości, (3) struktura molekularna zawierającego mikroelementy
            powinna być tak skonstruowana, aby zapewnić jego pełną wchłanialność
            przez organizm, (4) produkt powinien zawierać standaryzowaną,
            rzeczywistą zawartość bioaktywnych mikroelementów, (5) producent
            powinien ponadto sprawdzać surowce renomowanego dostawcy na
            zawartość w nich składników toksycznych powszechnie występujące w
            powietrzu, wodzie i glebie, (6) niezbędna jest również baza naukowa
            potwierdzającą kliniczną efektywność mikroelementów używanych przez
            producenta.
          </li>
          <li>
            Posiadanie swoich własnych plantacji do produkcji naturalnych
            mikroelementów jest dobrą praktyką. Nie zapewnia to jednak, że
            produkt tej plantacji będzie wolny od związków toksycznych
            powszechnie obecnych w powietrzu, a zatem i w deszczu, jak i wodach
            gruntowych, który jest niezbędny dla rozwoju rośliny. Niezbędne
            wydaje się zatem badanie wszystkich składników za pomocą
            spektrometra masowego, który jest w stanie wykryć jedna cząstkę
            niechcianego składnika, np. toksyny w 53 miliardach cząsteczek.
            Praktycznie można to porównać do znalezienia kropli atramentu w 3
            375 000 (trzech milionach trzystu siedemdziesięciu pięciu tysiącach)
            litrach wody. Dla porównania taka ilość wody mieści się w basenie o
            rozmiarach olimpijskich.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: `Co to jest suplement?`,
    answer: (
      <>
        <p>
          Suplement to ogólnodostępny środek spożywczy, często określany jako
          specjalistyczna forma pokarmu, przeznaczony do uzupełniania codziennej
          diety. Zawierająca on w sobie mikroelementy (witaminy, minerały,
          pierwiastki śladowe i aminokwasy), kwasy tłuszczowe, oraz flawonoidy.
        </p>
      </>
    ),
  },
  {
    question: `Dlaczego czystość suplementów jest tak istotna?`,
    answer: (
      <>
        <p>
          Wyobraź sobie, że połykasz 4 tabletki dziennie przez 10 lat, które
          zawierają związki toksyczne. Nie trudno policzyć ile w tym czasie
          można spożyć toksyn i zanieczyszczeń. Rachunek jest prosty!
        </p>
      </>
    ),
  },
  {
    question: `Dlaczego z rozwagą należy wybierać firmy producentów suplementów?`,
    answer: (
      <>
        <p>
          Niektórzy producenci suplementów informują na opakowaniu produktu, ze
          zawiera on, powiedzmy 500 mg witaminy C pozyskanej z naturalnego
          źródła, ale tylko 10% jest w nim bioaktywnej formy witaminy C, czyli
          tej, która może zostać wchłonięta przez nasz organizm. Ponadto nazwa
          składnika suplementu nie zawsze zapewnia, że jego struktura
          molekularna jest najwyższej jakości.
        </p>
        <p>
          Potrzeba suplementacji, czyli uzupełnianie pokarmu, który konsumujemy,
          mikroelementami jest rozpoznawana coraz częściej nawet przez
          najbardziej konserwatywnych przedstawicieli naturalnej profilaktyki
          prozdrowotnej. Suplementacja zaczyna być potężny przemysłem, w którym
          pojawiają się nieuczciwi producenci żyjący kosztem na niewiedzy
          konsumentów.
        </p>
      </>
    ),
  },
  {
    question: `Czy można suplementajcą / mikroelementami leczyć choroby?`,
    answer: (
      <>
        <p>
          Tak można, ale zajmuje to kilka do kilkanaście miesięcy. NALEŻY JEDNAK
          SKONSULTOWAC SWÓJ STAN ZDROWIA Z LEKARZEM PROWADZĄCYM, KTÓRY JEST W
          STANIE MONITOROWAĆ ZARÓWNO POPRAWĘ JAK I POGORSZENIE STANU ZDROWIA.
        </p>
        <p>
          Mikroelementy spożywane regularnie przywracają prawidłowe działanie
          wszystkich komórek ciała, oczyszczają, odżywiają i regenerują
          organizm, zatem przywracają zdrowie i wigor życia. Okazuje się, że
          często uzupełnianie spożywanej żywności mikroelementami podczas
          leczenia farmakologicznego, zaordynowanego przez lekarza medycyny
          konwencjonalnej, powoduje lepsze działanie leków. Skrócony zostaje
          zatem okres leczenia farmakologicznego.
        </p>
      </>
    ),
  },
  {
    question: `	Czego mogę oczekiwać, kiedy zacznę uzupełniać mój pokarm mikroelementami?`,
    answer: (
      <>
        <p>
          Ze zdziwieniem możesz nawet nie zauważyć, że podróż, która codziennie
          odbywasz już cię tak nie męczy, nie potrzebujesz drzemki
          popołudniowej. Wychodzisz na czwarte piętro, podbiegasz do autobusu i
          robisz to bez zadyszki. O dziwo nie złapałeś żadnej grypy a jest już
          wiosna, a przeziębienie, jeżeli złapałeś, to znikło szybko i nie
          pozostawiło powikłań (kaszel, chrypka, etc,). Latem zauważasz, że
          wiosenna alergia jakoś cię ominęła w tym roku. Fryzjer zauważa, że
          Twoje włosy zrobiły się gęstsze i lśniące, zaś krem do rąk leży
          bezużyteczny. Zauważasz, jaki świat jest piękny. Uśmiechasz się
          częściej do siebie i innych robisz się bardziej tolerancyjny i
          wyrozumiały.
        </p>
      </>
    ),
  },
];

export default faqList;
