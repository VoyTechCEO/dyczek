interface Module {
  list: string[];
  amount?: number;
}

interface TrainingModules {
  part: string;
  desc: string | JSX.Element;
  modules: Module[];
}

const trainingModulesList: TrainingModules[] = [
  {
    part: `I`,
    desc: `jest dostępnym wprowadzeniem dla mentalności Europejczyka
      w filozofię i praktykę TMC, w szczególności akupunktury.`,
    modules: [
      {
        list: [
          `Meridian serca.`,
          `Teoria 5 Faz, Prawo 5 Elementów/Żywiołów.`,
          `Prawo Matka - Syn.`,
          `Punkty pobudzające i uspokajające.`,
          `Odczytywanie pulsu.`,
        ],
      },
      {
        list: [
          `Meridian osierdzia.`,
          `Meridian płuc.`,
          `Prawo Dnia - Nocy.`,
          `Odpowiedniki pięciu elementów/żywiołów (kolor, dźwięk, emocje, zapach, etc.).`,
          `Punkty przepustowe.`,
        ],
      },
      {
        list: [
          `Meridian jelita cienkiego.`,
          `Prawo leczeni.`,
          `Przyczyny chorób.`,
          `Relacja sezonów do elementów/faz/żywiołów.`,
        ],
      },
      {
        list: [
          `Meridian potrójnego ogrzewacza.`,
          `Meridian jelita grubego.`,
          `Transfer energii.`,
          `Trzy Chou.`,
          `Punkty spotkania.`,
          `Koncept ministerstw - serce i jelito cienkie.`,
        ],
      },
      {
        list: [
          `Meridian nerek.`,
          `Energia agresywna.`,
          `Koncept ministerstw - wątroba i pęcherz.`,
          `Zaburzenie Akebane.`,
          `Meridian jelita grubego.`,
        ],
      },
      {
        list: [
          `Meridian śledziony.`,
          `Meridian wątroby.`,
          `Diagnoza brzuszna.`,
          `Koncept ministerstw - osierdzie i potrójny ogrzewacz.`,
          `Element/żywioł/faza ognia.`,
          `Punkty zgodności tylnej.`,
        ],
      },
      {
        list: [
          `Meridian pęcherza.`,
          `Prawo Męża - Żony.`,
          `Meridian pęczerza. Punkty zgodności tylnej.`,
          `Koncept ministerstw - element / żywioł / faza metalu.`,
        ],
      },
      {
        list: [
          `Meridian pęcherzyka żółciowego.`,
          `Koncept ministerstw - żołądek i śledziona.`,
          `Techniki nakłuwania: pobudzające i uspokajające.`,
          `Zastosowanie bez bliznowego przyżegania moksą.`,
          `Punkty alarmowe. Punkty zgodności przedniej.`,
          `Puls centralny - brzuszny.`,
        ],
      },
      {
        list: [
          `Punkty akupunktury - barkowe.`,
          `Głęboki kanał meridianu serca.`,
          `Głęboki kanał meridainu jelita cienkiego.`,
          `Okna Nieba.`,
          `Opętanie - zabieg smoka.`,
        ],
      },
      {
        list: [
          `Punkty akupunktury - brzuszne.`,
          `Głęboki kanał meridianu pęcherza.`,
          `Głęboki kanał meridianu nerek.`,
          `Technika 4 igieł.`,
          `Tętnicze ciśnienie krwi.`,
        ],
      },
      {
        list: [
          `Punkty akupunktury środkowej części brzucha.`,
          `Środki bezpieczeństwa. Czystość igieł.`,
          `Osoby, którym można odmówić sesji akupunktury.`,
          `Meridian głównego regulatora przedniego i tylnego.`,
          `Głęboki kanał meridianu osierdzia.`,
          `Głęboki kanał meridianu potrójnego ogrzewacza.`,
          `Punkty akupunktury klatki piersiowej.`,
        ],
      },
      {
        list: [
          `Diagnoza wg Tradycyjnej Medycyny Chińskiej (TCM).`,
          `Omdlenie pacjenta.`,
          `Punkty pierwszej pomocy.`,
          `Lista kontrolna dla diagnozy wg TCM.`,
          `Głęboki kanał meridianu pęcherzyka żółciowego i wątroby.`,
        ],
      },
      {
        list: [
          `Diagnoza wg TCM. Jak zadawać pytania?`,
          `Diagnoza wg TCM. Jak patrzeć?`,
          `Diagnoza wg TCM. Jak słuchać?`,
          `Zasady nakłuwania.`,
          `Głęboki kanał śledziony i żołądka.`,
        ],
      },
      {
        list: [
          `Porównanie żywiołów Metalu i Ognia.`,
          `Energetyczne blokady.`,
          `Planowanie sesji akupunktury.`,
          `Żywioł ognia.`,
          `Żywioł ziemi.`,
          `Głęboki kanał meridianu jelita grubego i płuc.`,
        ],
      },
      {
        list: [
          `Żywioł metalu.`,
          `Żywioł wody.`,
          `Żywioł drewna.`,
          `Analiza informacji zebranej podczas oględzin pacjenta.`,
          `Analiza snów wg TCM.`,
          `Oceany i morza energetyczne.`,
        ],
      },
    ],
  },
  {
    part: `II`,
    desc: (
      <>
        składa się z zajęć klinicznych, podczas których zostaną zastosowane
        praktycznie wiadomości zdobyte w części pierwszej. <br />
        <b>
          UKOŃCZENIE CZĘŚCI DRUGIEJ POZWALA NA SAMODZIELNE PROWADZENIE PRAKTYKI
        </b>
      </>
    ),
    modules: [
      {
        list: [`Zajęcia kliniczne.`],
        amount: 8,
      },
      {
        list: [
          `Osteo-akupunktura.`,
          `Wymiary energetyczne punktów akupunktury.`,
          `Zadanie domowe pacjenta.`,
          `Zaawansowane planowanie sesji akupunktury.`,
          `Jak rozmawiać z pacjentem?`,
          `Sesje akupunktury z dzieckiem.`,
        ],
      },
      {
        list: [`Zajęcia kliniczne`],
        amount: 6,
      },
    ],
  },
  {
    part: `III`,
    desc: `oferuje teorie i praktykę z zakresu Teorii 8 Zasad, która jest zakorzeniona w koncepcie YIN / YANG, a poznanie jej jest niezbędne do zrozumienia części czwartej, czyli Zielarstwa Chińskiego.`,
    modules: [
      {
        list: [`Zasada Yin/Yang; zastosowanie w diagnozie oraz dietetyce.`],
      },
      {
        list: [`Substancje podstawowe: Qi, Xue, Jing, Płyny Jin-Ye, Shen.`],
      },
      {
        list: [
          `Fizjologia obiegów czynnościowych narządów i funkcji ciała człowieka.`,
        ],
      },
      {
        list: [
          `Rozpoznawanie schematów zaburzeń energetycznych wg Zasady: Yin/Yang, Qi i Płynów.`,
        ],
      },
      {
        list: [
          `Rozpoznawanie schematów zaburzeń energetycznych: serca, wątroby, płuc, śledziony, nerek.`,
        ],
      },
      {
        list: [
          `Rozpoznawanie schematów zaburzeń energetycznych: żołądka, jelita cienkiego, jelita grubego, pęcherzyka żółciowego, pęcherza, potrójnego ogrzewacza.`,
        ],
      },
      {
        list: [
          `Zasady planowania sesji akupunktury, c.d.`,
          `Nadzwyczajne kanały energetyczne. Punkty dodatkowe.`,
        ],
      },
      {
        list: [
          `Funkcje punktów meridianów: śledziony, żołądka, serca, jelita cienkiego, pęcherza, i nerek.`,
        ],
      },
      {
        list: [
          `Funkcje punktów meridianów: osierdzia, potrójnego grzejnika, pęcherzyka żółciowego, wątroby, głównego regulatora przedniego i tylnego oraz punktów dodatkowych.`,
        ],
      },
      {
        list: [`Czynniki chorobotwórcze.`],
      },
    ],
  },
  {
    part: `IV`,
    desc: `jest całkowicie poświęcona Zielarstwu Chińskiemu.`,
    modules: [
      {
        list: [`Zasada Yin/Yang; zastosowanie w diagnozie oraz dietetyce.`],
      },
    ],
  },
];

export default trainingModulesList;
