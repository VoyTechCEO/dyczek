interface TrainingModules {
  part: string;
  desc: string | JSX.Element;
  list: string[][];
}

const trainingModulesList: TrainingModules[] = [
  {
    part: `I`,
    desc: `jest dostępnym wprowadzeniem dla mentalności Europejczyka
      w filozofię i praktykę TMC, w szczególności akupunktury.`,
    list: [
      [
        `Meridian serca.`,
        `Teoria 5 Faz, Prawo 5 Elementów/Żywiołów.`,
        `Prawo Matka - Syn.`,
        `Punkty pobudzające i uspokajające.`,
        `Odczytywanie pulsu.`,
      ],
      [
        `Meridian osierdzia.`,
        `Meridian płuc.`,
        `Prawo Dnia - Nocy.`,
        `Odpowiedniki pięciu elementów/żywiołów (kolor, dźwięk, emocje, zapach, etc.).`,
        `Punkty przepustowe.`,
      ],
      [
        `Meridian jelita cienkiego.`,
        `Prawo leczeni.`,
        `Przyczyny chorób.`,
        `Relacja sezonów do elementów/faz/żywiołów.`,
      ],
      [
        `Meridian potrójnego ogrzewacza.`,
        `Meridian jelita grubego.`,
        `Transfer energii.`,
        `Trzy Chou.`,
        `Punkty spotkania.`,
        `Koncept ministerstw - serce i jelito cienkie.`,
      ],
      [
        `Meridian nerek.`,
        `Energia agresywna.`,
        `Koncept ministerstw - wątroba i pęcherz.`,
        `Zaburzenie Akebane.`,
        `Meridian jelita grubego.`,
      ],
      [
        `Meridian śledziony.`,
        `Meridian wątroby.`,
        `Diagnoza brzuszna.`,
        `Koncept ministerstw - osierdzie i potrójny ogrzewacz.`,
        `Element/żywioł/faza ognia.`,
        `Punkty zgodności tylnej.`,
      ],
      [
        `Meridian pęcherza.`,
        `Prawo Męża - Żony.`,
        `Meridian pęczerza. Punkty zgodności tylnej.`,
        `Koncept ministerstw - element / żywioł / faza metalu.`,
      ],
      [
        `Meridian pęcherzyka żółciowego.`,
        `Koncept ministerstw - żołądek i śledziona.`,
        `Techniki nakłuwania: pobudzające i uspokajające.`,
        `Zastosowanie bez bliznowego przyżegania moksą.`,
        `Punkty alarmowe. Punkty zgodności przedniej.`,
        `Puls centralny - brzuszny.`,
      ],
      [
        `Punkty akupunktury - barkowe.`,
        `Głęboki kanał meridianu serca.`,
        `Głęboki kanał meridainu jelita cienkiego.`,
        `Okna Nieba.`,
        `Opętanie - zabieg smoka.`,
      ],
      [
        `Punkty akupunktury - brzuszne.`,
        `Głęboki kanał meridianu pęcherza.`,
        `Głęboki kanał meridianu nerek.`,
        `Technika 4 igieł.`,
        `Tętnicze ciśnienie krwi.`,
      ],
      [
        `Punkty akupunktury środkowej części brzucha.`,
        `Środki bezpieczeństwa. Czystość igieł.`,
        `Osoby, którym można odmówić sesji akupunktury.`,
        `Meridian głównego regulatora przedniego i tylnego.`,
        `Głęboki kanał meridianu osierdzia.`,
        `Głęboki kanał meridianu potrójnego ogrzewacza.`,
        `Punkty akupunktury klatki piersiowej.`,
      ],
      [
        `Diagnoza wg Tradycyjnej Medycyny Chińskiej (TCM).`,
        `Omdlenie pacjenta.`,
        `Punkty pierwszej pomocy.`,
        `Lista kontrolna dla diagnozy wg TCM.`,
        `Głęboki kanał meridianu pęcherzyka żółciowego i wątroby.`,
      ],
      [
        `Diagnoza wg TCM. Jak zadawać pytania?`,
        `Diagnoza wg TCM. Jak patrzeć?`,
        `Diagnoza wg TCM. Jak słuchać?`,
        `Zasady nakłuwania.`,
        `Głęboki kanał śledziony i żołądka.`,
      ],
      [
        `Porównanie żywiołów Metalu i Ognia.`,
        `Energetyczne blokady.`,
        `Planowanie sesji akupunktury.`,
        `Żywioł ognia.`,
        `Żywioł ziemi.`,
        `Głęboki kanał meridianu jelita grubego i płuc.`,
      ],
      [
        `Żywioł metalu.`,
        `Żywioł wody.`,
        `Żywioł drewna.`,
        `Analiza informacji zebranej podczas oględzin pacjenta.`,
        `Analiza snów wg TCM.`,
        `Oceany i morza energetyczne.`,
      ],
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
    list: [
      [
        `Meridian serca.`,
        `Teoria 5 Faz, Prawo 5 Elementów/Żywiołów.`,
        `Prawo Matka - Syn.`,
        `Punkty pobudzające i uspokajające.`,
        `Odczytywanie pulsu.`,
      ],
      [
        `Meridian osierdzia.`,
        `Meridian płuc.`,
        `Prawo Dnia - Nocy.`,
        `Odpowiedniki pięciu elementów/żywiołów (kolor, dźwięk, emocje, zapach, etc.).`,
        `Punkty przepustowe.`,
      ],
      [
        `Meridian jelita cienkiego.`,
        `Prawo leczeni.`,
        `Przyczyny chorób.`,
        `Relacja sezonów do elementów/faz/żywiołów.`,
      ],
      [
        `Meridian potrójnego ogrzewacza.`,
        `Meridian jelita grubego.`,
        `Transfer energii.`,
        `Trzy Chou.`,
        `Punkty spotkania.`,
        `Koncept ministerstw - serce i jelito cienkie.`,
      ],
      [
        `Meridian nerek.`,
        `Energia agresywna.`,
        `Koncept ministerstw - wątroba i pęcherz.`,
        `Zaburzenie Akebane.`,
        `Meridian jelita grubego.`,
      ],
      [
        `Meridian śledziony.`,
        `Meridian wątroby.`,
        `Diagnoza brzuszna.`,
        `Koncept ministerstw - osierdzie i potrójny ogrzewacz.`,
        `Element/żywioł/faza ognia.`,
        `Punkty zgodności tylnej.`,
      ],
      [
        `Meridian pęcherza.`,
        `Prawo Męża - Żony.`,
        `Meridian pęczerza. Punkty zgodności tylnej.`,
        `Koncept ministerstw - element / żywioł / faza metalu.`,
      ],
      [
        `Meridian pęcherzyka żółciowego.`,
        `Koncept ministerstw - żołądek i śledziona.`,
        `Techniki nakłuwania: pobudzające i uspokajające.`,
        `Zastosowanie bez bliznowego przyżegania moksą.`,
        `Punkty alarmowe. Punkty zgodności przedniej.`,
        `Puls centralny - brzuszny.`,
      ],
      [
        `Punkty akupunktury - barkowe.`,
        `Głęboki kanał meridianu serca.`,
        `Głęboki kanał meridainu jelita cienkiego.`,
        `Okna Nieba.`,
        `Opętanie - zabieg smoka.`,
      ],
      [
        `Punkty akupunktury - brzuszne.`,
        `Głęboki kanał meridianu pęcherza.`,
        `Głęboki kanał meridianu nerek.`,
        `Technika 4 igieł.`,
        `Tętnicze ciśnienie krwi.`,
      ],
      [
        `Punkty akupunktury środkowej części brzucha.`,
        `Środki bezpieczeństwa. Czystość igieł.`,
        `Osoby, którym można odmówić sesji akupunktury.`,
        `Meridian głównego regulatora przedniego i tylnego.`,
        `Głęboki kanał meridianu osierdzia.`,
        `Głęboki kanał meridianu potrójnego ogrzewacza.`,
        `Punkty akupunktury klatki piersiowej.`,
      ],
      [
        `Diagnoza wg Tradycyjnej Medycyny Chińskiej (TCM).`,
        `Omdlenie pacjenta.`,
        `Punkty pierwszej pomocy.`,
        `Lista kontrolna dla diagnozy wg TCM.`,
        `Głęboki kanał meridianu pęcherzyka żółciowego i wątroby.`,
      ],
      [
        `Diagnoza wg TCM. Jak zadawać pytania?`,
        `Diagnoza wg TCM. Jak patrzeć?`,
        `Diagnoza wg TCM. Jak słuchać?`,
        `Zasady nakłuwania.`,
        `Głęboki kanał śledziony i żołądka.`,
      ],
      [
        `Porównanie żywiołów Metalu i Ognia.`,
        `Energetyczne blokady.`,
        `Planowanie sesji akupunktury.`,
        `Żywioł ognia.`,
        `Żywioł ziemi.`,
        `Głęboki kanał meridianu jelita grubego i płuc.`,
      ],
      [
        `Żywioł metalu.`,
        `Żywioł wody.`,
        `Żywioł drewna.`,
        `Analiza informacji zebranej podczas oględzin pacjenta.`,
        `Analiza snów wg TCM.`,
        `Oceany i morza energetyczne.`,
      ],
    ],
  },
];

export default trainingModulesList;
