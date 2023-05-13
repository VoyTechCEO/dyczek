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
];

export default faqList;
