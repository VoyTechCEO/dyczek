interface Module {
  list: string[] | JSX.Element[];
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
        list: [
          `Zarys historii Zielarstwa Chińskiego w kontekście TCM.`,
          `Właściwości ziół: smak, temperatura, relacja z meridianami, działanie.`,
          `Sposoby mieszania ziół.`,
          `Współczesne badania dotyczące na temat TCM.`,
          `Obróbka ziół i sposoby ich przygotowania.`,
        ],
      },
      {
        list: [
          `Słownictwo używane przy studiowaniu przepisów Zielarstwa Chińskiego.`,
          `Zarys historii rozwoju przepisów.`,
          `Związek pomiędzy przepisami i receptami.`,
          `Skład przepisu.`,
          `Przygotowanie przepisu.`,
        ],
      },
      {
        list: [
          <>
            Zioła pobudzające:{' '}
            <i>
              ren shen, huang qi, dang shen, shan yao, bai zhu, gan cao, da/hong
              zao.
            </i>
          </>,
          <>
            Zioła usuwające Wilgoć:{' '}
            <i>
              fu ling, hua shi, yi yi ren, di fu zi, che qian zi, zhu ling, ze
              xie, yin chen hao.
            </i>
          </>,
          <>
            Aromatyczne zioła transformujące/przemieniające Wilgoć:{' '}
            <i>huo xiang, huo po, cang zhu, bai dou kou, sha ren.</i>
          </>,
          <>
            Zioła usuwające Wiatr - Wilgoć: <i>du huo, qin jiao.</i>
          </>,
        ],
      },
      {
        list: [
          <>
            Pobudzające zioła typu Yang:{' '}
            <i>
              lu rong, rou cong rong, yin yang huo, du zhong, xu duan, tu si zi.
            </i>
          </>,
          <>
            Przepisy ziołowe pobudzające energię Qi:{' '}
            <i>
              si jun zi tang, shen ling bai zhu san, bu zhong yi qi tang, xiang
              sha liu jun zi tang, sheng mai san, bu fei tang.
            </i>
          </>,
        ],
      },
      {
        list: [
          <>
            Zioła ogrzewające wnętrze i usuwające Zimno:{' '}
            <i>fu zi, gan jiang, rou gui, whu zhu ju.</i>
          </>,
          <>
            Zioła stabilizujące i ściągające:{' '}
            <i>
              shan zhu yu, wu wei zi, rou dou kou fu pen zi, sang piao shao.
            </i>
          </>,
          <>
            Przepisy ziołowe pobudzające energię Yang:{' '}
            <i>you qi wan, er xiang tang, tu si zi wan, jin gui shen qi wan.</i>
          </>,
          <>
            Stabilizujące i ściągające przepisy ziołowe:{' '}
            <i>
              gu chong tang, you ping fen san, jin suo gu jing wan, mu lli san,
              suo chuan wan, si shen wan.
            </i>
          </>,
        ],
      },
      {
        list: [
          <>
            Zioła pobudzające energię Yin:{' '}
            <i>
              sha shen, tian men dong, mai men dong, sang ji sheng, han lian
              cao.
            </i>
          </>,
          <>
            Przepisy ziołowe pobudzające energię Yin:{' '}
            <i>
              yi guan jian, zuo gui yin, liu wei di huang wan, da bu yin wan.
            </i>
          </>,
          <>
            Przepisy ziołowe usuwające Suchość:{' '}
            <i>mai men dong tang, bai he gu jin tang, qing zao jiu fei tang.</i>
          </>,
        ],
      },
      {
        list: [
          <>
            <p className='align-left'>Przepisy ziołowe usuwające Wilgoć:</p>
            <ol>
              <li>
                Przepisy ziołowe, które stymulują oddawanie moczu i wypłukują
                Wilgoć: wu ling san, wu pi san, fang ji huang qi san.
              </li>
              <li>
                Przepisy ziołowe transformujące/przemieniające Mętną Wilgoć:
                ping wei san, huo xiang zheng gi san.
              </li>
              <li>
                Przepisy ziołowe usuwające Wilgotne Ciepło: yin chen hao tang,
                ba zheng san, shao yao tang, er miao san.
              </li>
              <li>
                Przepisy ziołowe, które ogrzewają i transformują/przemianiają
                Wodę i Wilgoć oraz usuwają Wiatr - Wilgoć: zhen wu tang, du huo
                ji sheng tang.
              </li>
            </ol>
          </>,
        ],
      },
      {
        list: [
          <>
            Zioła pobudzające Krew:{' '}
            <i>
              shu di huang, he shou wu, dang gui, bai shao yao, e jiao, gou qi
              zi, long yan rou.
            </i>
          </>,
          <>
            Zioła regulujące przepływ energii Qi:{' '}
            <i>
              chen pi, ging pi, da fu pi, zhi shi, xiang fu, mu xiang wu yao,
              xie bai.
            </i>
          </>,
          <>Zioła regulujące przepływ i orzeźwiające Krew.</>,
        ],
      },
      {
        list: [
          <>
            Zioła wyzwalające Zewnętrzny Ciepły czynnik patogeniczny:{' '}
            <i>
              gui zhi, ma huang, zi su ye, jing jie, fang feng, qiang huo, bai
              zhi, xi xin, sheng jiang.
            </i>
          </>,
          <>
            Przepisy ziołowe pobudzające krew:{' '}
            <i>si wu tang, dang gui shao yao san.</i>
          </>,
          <>
            Przepisy ziołowe pobudzające energię Qi i Krew:{' '}
            <i>
              gui pi tang, dang gui bu xue tang, ba zhen tang, zhi gan cao tang.
            </i>
          </>,
        ],
      },
      {
        list: [
          <>
            Zioła wyzwalające Zewnętrzny Zimny czynnik patogeniczny:{' '}
            <i>
              bo he, niu bang zi, sang ye, ju hua, ge gen, chai hu, sheng ma.
            </i>
          </>,
          <>
            Przepisy ziołowe ogrzewające Wewnętrzne Zimno:{' '}
            <i>
              si ni tang, li zhong wan, dang qui si ni tang, xiao jian zhong
              tang, wu zhu yu tang, shen fu tang.
            </i>
          </>,
        ],
      },
      {
        list: [
          <>
            <p className='align-left'>Neurastenia (wyczerpanie nerwowe):</p>
            <ol>
              <li>XUE XU SERCA & QI XU ŚLEDZIONY</li>
              <li>YIN XU PALĄCY OGIEŃ - OGIEŃ SERCA & WĄTROBY</li>
              <li>
                QI XU SERCA & PĘCHERZYKA ŻÓŁCIOWEGO z akumulacją gorącego śluzu.
              </li>
              <li>XUE SERCA & XU YIN</li>
              <li>YIN XU SERCA & NEREK</li>
              <li>XUE XU SERCA I WĄTROBY</li>
              <li>PUSTE CIEPŁO YIN XU SERCA & WĄTROBY</li>
              <li>PUSTE CIEPŁO XUE XU SERCA</li>
              <li>PUSTE CIEPŁO YIN XU SERCA</li>
              <li>QI ZHI</li>
            </ol>
            <p className='align-left'>Bezsenność:</p>
            <ol>
              <li>
                Akumulacja/nagromadzenie się Wilgoci, która utrudnia przepływ
                energii PI & WEI
              </li>
              <li>PI QI XU</li>
              <li>YANG QI XU</li>
              <li>Zablokowanie śluzem.</li>
              <li>ZHEN & PI QI XU</li>
              <li>Upadek energii Yang.</li>
            </ol>
          </>,
        ],
      },
      {
        list: [
          <>
            <p className='align-left'>Obrzęk:</p>
            <ol>
              <li>
                <p className='align-left'>Patologia.</p>
                <ul className='dashed'>
                  <li>Czynniki patogeniczne zewnętrzne.</li>
                  <li>Czynniki wewnętrzne.</li>
                  <li>Brak prawidłowego działania.</li>
                </ul>
              </li>
              <li>
                <p className='align-left'>Syndromy.</p>
                <ul className='dashed'>
                  <li>Płuca zablokowane przez Zimny Wiatr.</li>
                  <li>Płuca zblokowane przez Ciepły Wiatr.</li>
                  <li>WEI QI / YANG QI XU.</li>
                  <li>Zablokowanie Ciepłą Wilgocią</li>
                  <li>
                    Zablokowana Śledziona przez akumulację Wody i Wilgoci.
                  </li>
                  <li>XU YANG Śledziony i akumulacja Wody.</li>
                  <li>XU YANF Nerek, akumulacja Wody.</li>
                </ul>
              </li>
            </ol>
            <p className='align-left'>Obrzęk podczas ciąży:</p>
            <ol>
              <li>QI XU Śledziony</li>
              <li>XU QI Nerek & YANG</li>
              <li>Zastój QI</li>
            </ol>
          </>,
        ],
      },
    ],
  },
];

export default trainingModulesList;
