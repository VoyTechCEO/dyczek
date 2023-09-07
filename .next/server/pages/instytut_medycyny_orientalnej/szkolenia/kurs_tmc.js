"use strict";
(() => {
var exports = {};
exports.id = 8790;
exports.ids = [8790];
exports.modules = {

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ImoTrainingModules = ({ contentList , number , amount  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    children: [
                        "Moduł ",
                        amount ? `${number} - ${number + amount}` : number
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: contentList.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: item
                        }, `${item}trainingmodules${index}`);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImoTrainingModules);


/***/ }),

/***/ 6014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_imoTrainingModules_ImoTrainingModules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7108);
/* harmony import */ var _utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7110);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_react_spring_web__WEBPACK_IMPORTED_MODULE_4__]);
_react_spring_web__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ImoTrainingSector = ({ sector , sectorIdx , totalModulesListLength  })=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let prevAmount = 0;
    let totalAmount = 0;
    // animations
    const [hoverArrow, animateHoverArrow] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.useSpring)(()=>({
            from: {
                bottom: `0`
            }
        }));
    const [clickArrow, animateClickArrow] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.useSpring)(()=>({
            from: {
                rotateZ: 90
            }
        }));
    const [showList, animateShowList] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.useSpring)(()=>({
            from: {
                maxHeight: `0`
            }
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: "sector",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    children: [
                        "Część ",
                        sector.part
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "description",
                    children: sector.desc
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>{
                        setShow(!show);
                        if (!show) {
                            animateClickArrow.start({
                                rotateZ: -90
                            });
                            animateShowList.start({
                                maxHeight: `1000rem`
                            });
                        } else {
                            animateClickArrow.start({
                                rotateZ: 90
                            });
                            animateShowList.start({
                                maxHeight: `0`
                            });
                        }
                    },
                    onMouseOver: ()=>{
                        animateHoverArrow.start({
                            bottom: `-0.5rem`
                        });
                    },
                    onMouseOut: ()=>{
                        animateHoverArrow.start({
                            bottom: `0`
                        });
                    },
                    children: [
                        show ? `Zwiń` : `Rozwiń`,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.animated.svg, {
                            style: {
                                ...hoverArrow,
                                ...clickArrow
                            },
                            height: "0.5rem",
                            version: "1.1",
                            viewBox: "0 0 60 50",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                transform: "matrix(.37382 0 0 .26978 -8.7481 -1.207)",
                                d: "m183.91 97.141-160.5 92.667v-92.667-92.667l80.252 46.334z"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.animated.div, {
                    className: "modules",
                    style: showList,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: sector.modules.map((module, moduleIdx)=>{
                            let modNum = moduleIdx + 1;
                            totalAmount += prevAmount;
                            if (_utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z[sectorIdx - 1]) {
                                modNum = totalModulesListLength + moduleIdx + totalAmount + 1;
                            }
                            prevAmount = 0;
                            if (module.amount) {
                                prevAmount = module.amount;
                            }
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_imoTrainingModules_ImoTrainingModules__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                contentList: sector.modules[moduleIdx].list,
                                number: modNum,
                                amount: module.amount
                            }, `${module}modulelists${moduleIdx}`);
                        })
                    })
                })
            ]
        }, `${sector.part}sectorlist`)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImoTrainingSector);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4705);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_headSet_HeadSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9414);
/* harmony import */ var _components_mainNav_MainNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _components_standardMainContent_StandardMainContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2066);
/* harmony import */ var _components_imoHeader_ImoHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4416);
/* harmony import */ var _components_smallerInfo_SmallerInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2185);
/* harmony import */ var _components_imoTrainingSector_ImoTrainingSector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6014);
/* harmony import */ var _utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7110);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_imoTrainingSector_ImoTrainingSector__WEBPACK_IMPORTED_MODULE_8__]);
_components_imoTrainingSector_ImoTrainingSector__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_10__.serverSideTranslations)(locale, [
                "main",
                "imoMain"
            ])
        }
    };
}
const IMO = ()=>{
    let totalModulesListLength = 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_headSet_HeadSet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main",
                className: "main-yellow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_imoHeader_ImoHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mainNav_MainNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_standardMainContent_StandardMainContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "container main-container imo-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "KURS TRADYCYJNEJ MEDYCYNY CHIŃSKIEJ"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "align-left",
                                    children: "Szanowni Państwo!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "align-left",
                                    children: "Mam wielką przyjemność zaprezentować Państwu zarys tematyczny monumentalnego kursu w zakresie Tradycyjnej Chińskiej Medycyny (TMC)."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "align-left",
                                    children: "Kurs TMC składa się z 80 moduł\xf3w o r\xf3żnej tematyce dotyczącej TMC. Został on podzielony na pięć części:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: _utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_9__/* ["default"].map */ .Z.map((sector, sectorIdx)=>{
                                        if (_utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z[sectorIdx - 1]) {
                                            let allAmounts = 0;
                                            _utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z[sectorIdx - 1].modules.forEach((singleModule)=>{
                                                if (singleModule.amount) {
                                                    allAmounts += singleModule.amount;
                                                }
                                            });
                                            totalModulesListLength += _utils_trainingModulesList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z[sectorIdx - 1].modules.length + allAmounts;
                                        }
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_imoTrainingSector_ImoTrainingSector__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            sector: sector,
                                            sectorIdx: sectorIdx,
                                            totalModulesListLength: totalModulesListLength
                                        }, `${sector}imoTrainingSectorModule${sectorIdx}`);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "align-left",
                                    children: "Zajęcia będą prowadzone w języku polskim, przez autora kursu, oraz inne osoby z wieloletnim doświadczeniem w TMC."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Kurs ten jest otwarty dla wszystkich zainteresowanych."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "align-left",
                                    children: [
                                        "Osoby, kt\xf3re będą chciały pracować z TMC, będą zobowiązane po każdym module napisać pracę domową, kt\xf3ra będzie oceniana i wymagane jest jej zaliczenie. Poza tym osoby te, będą zobowiązane podejść do egzamin\xf3w praktycznych z lokalizacji punkt\xf3w akupunktury, oraz teoretycznych z materiału przedstawionego na modułach. Zaliczenie tych egzamin\xf3w jest niezbędne do rozpoczęcia zajęć klinicznych. ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Po ukończeniu zajęć klinicznych studenci będą posiadali wystarczającą wiedze, aby rozpocząć samodzielną praktykę akupunktury. Moduły od 25 w g\xf3rę są opcjonalne. ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Osoby, kt\xf3re chcą tylko pogłębić swoją wiedze z zakresu TMC nie muszą zaliczać egzamin\xf3w i prac domowych. Nie mogą jednak one brać udziału w zajęciach klinicznych."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "align-left",
                                    children: "Moduły będą się odbywały w cyklu dwudniowym w odstępach miesięcznych. W roku kalendarzowym będzie miało miejsce dziesięć spotkań dwudniowych. Koszt jednego spotkania 550 zł (bez koszt\xf3w zakwaterowania). Opłaty za sprawdzanie zadania domowego i opłaty egzaminacyjne zostaną podane w terminie p\xf3źniejszym. Kurs się rozpocznie po skompletowaniu grupy liczącej 40 os\xf3b."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Zainteresowanych proszę o kontakt z autorem kursu: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Henryk Dyczek ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "henryk.dyczek@man.torun.pl ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "tel: (056) 6789 343"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "grudzień, 2004"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_smallerInfo_SmallerInfo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IMO);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const trainingModulesList = [
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
                    `Odczytywanie pulsu.`
                ]
            },
            {
                list: [
                    `Meridian osierdzia.`,
                    `Meridian płuc.`,
                    `Prawo Dnia - Nocy.`,
                    `Odpowiedniki pięciu elementów/żywiołów (kolor, dźwięk, emocje, zapach, etc.).`,
                    `Punkty przepustowe.`
                ]
            },
            {
                list: [
                    `Meridian jelita cienkiego.`,
                    `Prawo leczeni.`,
                    `Przyczyny chorób.`,
                    `Relacja sezonów do elementów/faz/żywiołów.`
                ]
            },
            {
                list: [
                    `Meridian potrójnego ogrzewacza.`,
                    `Meridian jelita grubego.`,
                    `Transfer energii.`,
                    `Trzy Chou.`,
                    `Punkty spotkania.`,
                    `Koncept ministerstw - serce i jelito cienkie.`
                ]
            },
            {
                list: [
                    `Meridian nerek.`,
                    `Energia agresywna.`,
                    `Koncept ministerstw - wątroba i pęcherz.`,
                    `Zaburzenie Akebane.`,
                    `Meridian jelita grubego.`
                ]
            },
            {
                list: [
                    `Meridian śledziony.`,
                    `Meridian wątroby.`,
                    `Diagnoza brzuszna.`,
                    `Koncept ministerstw - osierdzie i potrójny ogrzewacz.`,
                    `Element/żywioł/faza ognia.`,
                    `Punkty zgodności tylnej.`
                ]
            },
            {
                list: [
                    `Meridian pęcherza.`,
                    `Prawo Męża - Żony.`,
                    `Meridian pęczerza. Punkty zgodności tylnej.`,
                    `Koncept ministerstw - element / żywioł / faza metalu.`
                ]
            },
            {
                list: [
                    `Meridian pęcherzyka żółciowego.`,
                    `Koncept ministerstw - żołądek i śledziona.`,
                    `Techniki nakłuwania: pobudzające i uspokajające.`,
                    `Zastosowanie bez bliznowego przyżegania moksą.`,
                    `Punkty alarmowe. Punkty zgodności przedniej.`,
                    `Puls centralny - brzuszny.`
                ]
            },
            {
                list: [
                    `Punkty akupunktury - barkowe.`,
                    `Głęboki kanał meridianu serca.`,
                    `Głęboki kanał meridainu jelita cienkiego.`,
                    `Okna Nieba.`,
                    `Opętanie - zabieg smoka.`
                ]
            },
            {
                list: [
                    `Punkty akupunktury - brzuszne.`,
                    `Głęboki kanał meridianu pęcherza.`,
                    `Głęboki kanał meridianu nerek.`,
                    `Technika 4 igieł.`,
                    `Tętnicze ciśnienie krwi.`
                ]
            },
            {
                list: [
                    `Punkty akupunktury środkowej części brzucha.`,
                    `Środki bezpieczeństwa. Czystość igieł.`,
                    `Osoby, którym można odmówić sesji akupunktury.`,
                    `Meridian głównego regulatora przedniego i tylnego.`,
                    `Głęboki kanał meridianu osierdzia.`,
                    `Głęboki kanał meridianu potrójnego ogrzewacza.`,
                    `Punkty akupunktury klatki piersiowej.`
                ]
            },
            {
                list: [
                    `Diagnoza wg Tradycyjnej Medycyny Chińskiej (TCM).`,
                    `Omdlenie pacjenta.`,
                    `Punkty pierwszej pomocy.`,
                    `Lista kontrolna dla diagnozy wg TCM.`,
                    `Głęboki kanał meridianu pęcherzyka żółciowego i wątroby.`
                ]
            },
            {
                list: [
                    `Diagnoza wg TCM. Jak zadawać pytania?`,
                    `Diagnoza wg TCM. Jak patrzeć?`,
                    `Diagnoza wg TCM. Jak słuchać?`,
                    `Zasady nakłuwania.`,
                    `Głęboki kanał śledziony i żołądka.`
                ]
            },
            {
                list: [
                    `Porównanie żywiołów Metalu i Ognia.`,
                    `Energetyczne blokady.`,
                    `Planowanie sesji akupunktury.`,
                    `Żywioł ognia.`,
                    `Żywioł ziemi.`,
                    `Głęboki kanał meridianu jelita grubego i płuc.`
                ]
            },
            {
                list: [
                    `Żywioł metalu.`,
                    `Żywioł wody.`,
                    `Żywioł drewna.`,
                    `Analiza informacji zebranej podczas oględzin pacjenta.`,
                    `Analiza snów wg TCM.`,
                    `Oceany i morza energetyczne.`
                ]
            }
        ]
    },
    {
        part: `II`,
        desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "składa się z zajęć klinicznych, podczas kt\xf3rych zostaną zastosowane praktycznie wiadomości zdobyte w części pierwszej. ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "UKOŃCZENIE CZĘŚCI DRUGIEJ POZWALA NA SAMODZIELNE PROWADZENIE PRAKTYKI"
                })
            ]
        }),
        modules: [
            {
                list: [
                    `Zajęcia kliniczne.`
                ],
                amount: 8
            },
            {
                list: [
                    `Osteo-akupunktura.`,
                    `Wymiary energetyczne punktów akupunktury.`,
                    `Zadanie domowe pacjenta.`,
                    `Zaawansowane planowanie sesji akupunktury.`,
                    `Jak rozmawiać z pacjentem?`,
                    `Sesje akupunktury z dzieckiem.`
                ]
            },
            {
                list: [
                    `Zajęcia kliniczne`
                ],
                amount: 6
            }
        ]
    },
    {
        part: `III`,
        desc: `oferuje teorie i praktykę z zakresu Teorii 8 Zasad, która jest zakorzeniona w koncepcie YIN / YANG, a poznanie jej jest niezbędne do zrozumienia części czwartej, czyli Zielarstwa Chińskiego.`,
        modules: [
            {
                list: [
                    `Zasada Yin/Yang; zastosowanie w diagnozie oraz dietetyce.`
                ]
            },
            {
                list: [
                    `Substancje podstawowe: Qi, Xue, Jing, Płyny Jin-Ye, Shen.`
                ]
            },
            {
                list: [
                    `Fizjologia obiegów czynnościowych narządów i funkcji ciała człowieka.`
                ]
            },
            {
                list: [
                    `Rozpoznawanie schematów zaburzeń energetycznych wg Zasady: Yin/Yang, Qi i Płynów.`
                ]
            },
            {
                list: [
                    `Rozpoznawanie schematów zaburzeń energetycznych: serca, wątroby, płuc, śledziony, nerek.`
                ]
            },
            {
                list: [
                    `Rozpoznawanie schematów zaburzeń energetycznych: żołądka, jelita cienkiego, jelita grubego, pęcherzyka żółciowego, pęcherza, potrójnego ogrzewacza.`
                ]
            },
            {
                list: [
                    `Zasady planowania sesji akupunktury, c.d.`,
                    `Nadzwyczajne kanały energetyczne. Punkty dodatkowe.`
                ]
            },
            {
                list: [
                    `Funkcje punktów meridianów: śledziony, żołądka, serca, jelita cienkiego, pęcherza, i nerek.`
                ]
            },
            {
                list: [
                    `Funkcje punktów meridianów: osierdzia, potrójnego grzejnika, pęcherzyka żółciowego, wątroby, głównego regulatora przedniego i tylnego oraz punktów dodatkowych.`
                ]
            },
            {
                list: [
                    `Czynniki chorobotwórcze.`
                ]
            }
        ]
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
                    `Obróbka ziół i sposoby ich przygotowania.`
                ]
            },
            {
                list: [
                    `Słownictwo używane przy studiowaniu przepisów Zielarstwa Chińskiego.`,
                    `Zarys historii rozwoju przepisów.`,
                    `Związek pomiędzy przepisami i receptami.`,
                    `Skład przepisu.`,
                    `Przygotowanie przepisu.`
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła pobudzające:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "ren shen, huang qi, dang shen, shan yao, bai zhu, gan cao, da/hong zao."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła usuwające Wilgoć:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "fu ling, hua shi, yi yi ren, di fu zi, che qian zi, zhu ling, ze xie, yin chen hao."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Aromatyczne zioła transformujące/przemieniające Wilgoć:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "huo xiang, huo po, cang zhu, bai dou kou, sha ren."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła usuwające Wiatr - Wilgoć: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "du huo, qin jiao."
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Pobudzające zioła typu Yang:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "lu rong, rou cong rong, yin yang huo, du zhong, xu duan, tu si zi."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe pobudzające energię Qi:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "si jun zi tang, shen ling bai zhu san, bu zhong yi qi tang, xiang sha liu jun zi tang, sheng mai san, bu fei tang."
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła ogrzewające wnętrze i usuwające Zimno:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "fu zi, gan jiang, rou gui, whu zhu ju."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła stabilizujące i ściągające:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "shan zhu yu, wu wei zi, rou dou kou fu pen zi, sang piao shao."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe pobudzające energię Yang:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "you qi wan, er xiang tang, tu si zi wan, jin gui shen qi wan."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Stabilizujące i ściągające przepisy ziołowe:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "gu chong tang, you ping fen san, jin suo gu jing wan, mu lli san, suo chuan wan, si shen wan."
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła pobudzające energię Yin:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "sha shen, tian men dong, mai men dong, sang ji sheng, han lian cao."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe pobudzające energię Yin:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "yi guan jian, zuo gui yin, liu wei di huang wan, da bu yin wan."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe usuwające Suchość:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "mai men dong tang, bai he gu jin tang, qing zao jiu fei tang."
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Przepisy ziołowe usuwające Wilgoć:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Przepisy ziołowe, kt\xf3re stymulują oddawanie moczu i wypłukują Wilgoć: wu ling san, wu pi san, fang ji huang qi san."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Przepisy ziołowe transformujące/przemieniające Mętną Wilgoć: ping wei san, huo xiang zheng gi san."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Przepisy ziołowe usuwające Wilgotne Ciepło: yin chen hao tang, ba zheng san, shao yao tang, er miao san."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Przepisy ziołowe, kt\xf3re ogrzewają i transformują/przemianiają Wodę i Wilgoć oraz usuwają Wiatr - Wilgoć: zhen wu tang, du huo ji sheng tang."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła pobudzające Krew:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "shu di huang, he shou wu, dang gui, bai shao yao, e jiao, gou qi zi, long yan rou."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła regulujące przepływ energii Qi:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "chen pi, ging pi, da fu pi, zhi shi, xiang fu, mu xiang wu yao, xie bai."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Zioła regulujące przepływ i orzeźwiające Krew."
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła wyzwalające Zewnętrzny Ciepły czynnik patogeniczny:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "gui zhi, ma huang, zi su ye, jing jie, fang feng, qiang huo, bai zhi, xi xin, sheng jiang."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe pobudzające krew:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "si wu tang, dang gui shao yao san."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe pobudzające energię Qi i Krew:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "gui pi tang, dang gui bu xue tang, ba zhen tang, zhi gan cao tang."
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Zioła wyzwalające Zewnętrzny Zimny czynnik patogeniczny:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "bo he, niu bang zi, sang ye, ju hua, ge gen, chai hu, sheng ma."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Przepisy ziołowe ogrzewające Wewnętrzne Zimno:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "si ni tang, li zhong wan, dang qui si ni tang, xiao jian zhong tang, wu zhu yu tang, shen fu tang."
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Neurastenia (wyczerpanie nerwowe):"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "XUE XU SERCA & QI XU ŚLEDZIONY"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "YIN XU PALĄCY OGIEŃ - OGIEŃ SERCA & WĄTROBY"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "QI XU SERCA & PĘCHERZYKA Ż\xd3ŁCIOWEGO z akumulacją gorącego śluzu."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "XUE SERCA & XU YIN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "YIN XU SERCA & NEREK"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "XUE XU SERCA I WĄTROBY"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "PUSTE CIEPŁO YIN XU SERCA & WĄTROBY"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "PUSTE CIEPŁO XUE XU SERCA"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "PUSTE CIEPŁO YIN XU SERCA"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "QI ZHI"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Bezsenność:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Akumulacja/nagromadzenie się Wilgoci, kt\xf3ra utrudnia przepływ energii PI & WEI"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "PI QI XU"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "YANG QI XU"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zablokowanie śluzem."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "ZHEN & PI QI XU"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Upadek energii Yang."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Obrzęk:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Patologia."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dashed",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Czynniki patogeniczne zewnętrzne."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Czynniki wewnętrzne."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Brak prawidłowego działania."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Syndromy."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dashed",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Płuca zablokowane przez Zimny Wiatr."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Płuca zblokowane przez Ciepły Wiatr."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "WEI QI / YANG QI XU."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Zablokowanie Ciepłą Wilgocią"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Zablokowana Śledziona przez akumulację Wody i Wilgoci."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "XU YANG Śledziony i akumulacja Wody."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "XU YANF Nerek, akumulacja Wody."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Obrzęk podczas ciąży:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "QI XU Śledziony"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "XU QI Nerek & YANG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zast\xf3j QI"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    `Syndrom BI (Syndrom Bolesnego Zastoju).`,
                    `Wiatr / Zimno / Wilgoć.`,
                    `Początkowe bóle.`,
                    `Szyja ramiona i plecy.`,
                    `Ciepło.`,
                    `Syndrom mieszany.`
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Syndromy WEI - Atroficzne (Zaniku)"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Etiologia i patogeneza."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Analiza choroby i działanie terapeutyczne:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dashed",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Suchota śluzu Płucnego i Żołądkowego."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Inwazja ciała przez Wilgotne - Ciepło."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Xu Śledziony i Żołądka."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Xu Wątroby i Nerek"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Stwardnienie Rozsiane"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Objawy."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Analiza choroby i działanie terapeutyczne:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dashed",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Inwazja meridian\xf3w przez Wiatr - Wilgoć."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "YIN XU Wątroby i Nerek."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "XU YANG Nerek."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Zast\xf3j energii QI & Krwi."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "B\xf3l nadbrzuszy"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zimno i Wilgoć atakujące Środkowe Jiao: (rodzaj Shi)."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zast\xf3j żywności: (rodzaj Shi)."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zast\xf3j QI Wątroby: (rodzaj Shi). Dysharmonia pomiędzy Wątrobą i Śledzioną."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zast\xf3j Krwi: (rodzaj Shi)."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "XU QI Żołądka i Śledziony z zastojem Wilgoci."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "U QI Żołądka."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Wrzodziejące zapalenie okrężnicy"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Zast\xf3j Wilgoci - Ciepła."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Wilgoć - Zimno (XU Śledziony i Żołądka)."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "YIN XU."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Przeziębienie"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Wiatr - Zimno"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Wiatr - Ciepło"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Letnie Ciepło - Wilgoć"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Zapalenie zatok"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Rzężenie (Syndrom XIAO)"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "align-left",
                                        children: "Stan ostry"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Zimno"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Ciepło"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "XU"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "align-left",
                                        children: "Remisja"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "XU płuc"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "XU śledziony"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "XU nerek"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Zadyszka ( Syndrom Chuan)"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Rodzaj Shi"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Wiatr - Zimno"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Śluz - Ciepło"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Śluz - Zimno"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Zast\xf3j QI"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Rodzaj XU"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "XU płuc"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "XU nerek"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    `Nieregularności okresu.`,
                    `Problemy podczas krwawienia.`,
                    `Choroby ciąży.`,
                    `Choroby poporodowe.`,
                    `Klimakterium.`
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "Choroby sk\xf3ry."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Egzema (Wilgoć - Ciepło / Gorąca Krew z Wiatrem / XU Śledziony & Wilgoć / Xu Krwi i Suchy Wiatr )."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Łuszczyca (Gorąca Krew i Trujący Ogień / Xu Krwi i Suchy Wiatr / Zast\xf3j Krwi / Trujący Ogień)."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Trądzik (Ciepło w Płucach i Ciepła Krew / Wilgotne Ciepło Yang Ming / Ciepła Krew i jej Zast\xf3j / Zast\xf3j Śluzu i Krwi)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Trądzik r\xf3żowaty (Zast\xf3j Ciepła w Płucach i Żołądku / Zast\xf3j i Ciepło Krwi)."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Pokrzywka (Wiatr - Ciepło / Wiatr - Zimno / Wilgoć Śledziony i Żołądka i Wiatr / Gorąca Krew produkująca Wiatr / Zast\xf3j Krwi)."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "align-left",
                                children: "B\xf3le i zawroty głowy."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Przyczyny zewnętrzne:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Wiatr / Zimno (z i bez XU), Wiatr / Ciepło (z i bez XU), mieszany Wiatr / Zimno, mieszany Wiatr / Ciepło, Wiatr / Wilgoć, YIN JING LUO."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Przyczyny wewnętrzne:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "align-left",
                                                children: "Unoszący się Yang Wątroby, Stagnacja QI Wątroby, SHAO Yang, Ogień Wątroby, Ogień Żołądka, Zimno w Kanale Wątroby, YIN XU Nerek z Unoszącym się Yang Wątroby, YIN XU Nerek, Yin Xu Nerek i Wątroby z Wiatrem, Yang Xu Nerek, QI & XUE XU, QI XU, XUE XU Serca, XUE XU Wątroby, XUE XU, Ognisty Śluz podburzający Serce, Mętny Śluz, Zast\xf3j XUE, Poważne trucizny."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Choroby dziecięce"
                    })
                ]
            },
            {
                list: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Nerwice"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Zast\xf3j QI Wątroby, YIN XU prowadzące do nad aktywnego buszującego Ognia, QI XU Śledziony prowadzący do XUE XU Serca, XUE Serca / YIN XU."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Depresje psychiczne i emocjonalne"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Depresja QI Wątroby, Depresja QI Wątroby prowadząca do nad aktywnego Ognia, Zast\xf3j QI i Śluzu, Stagnacja QI i Śluzu blokująca zmysły, Stagnacja QI Wątroby, Stagnacja XUE Wątroby, Ogień Wątroby, QI XU Śledziony z akumulacją Wilgoci w ZHONG JIAO, Zatrzymanie żywności w Żołądku, Śluz zamulający m\xf3zg, XUE XU, YIN XU Nerek z Nadaktywnym Ogniem,"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Psychozy, Schizofrenia, Szaleństwo (KUAN), Depresja (DIAN)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Depresja - Zast\xf3j Śluzu / QI"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Szaleństwo - Buszujący Ognisty Śluz"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Depresje psychiczne (BAI HE BING)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "align-left",
                                            children: "Yin XU Serca i Płuc, Wewnętrzne zaburzenie Gorącego Śluzu, YIN XU Serca, Zast\xf3j QI Wątroby, Zast\xf3j QI Śledziony, YIN XU Płuc i Nerek, Dysharmonia Ognia Serca i Wody Nerek."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ],
                amount: 7
            },
            {
                list: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Rak i HIV"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Udar m\xf3zgu"
                                })
                            ]
                        })
                    })
                ]
            },
            {
                list: [
                    `Bio-chemia ziół.`
                ]
            }
        ]
    },
    {
        part: `V`,
        desc: `oferuje unikalną możliwość poznania QI QONG'u, czyli pracy z energią QI z użyciem rąk i systemu nerwowego terapeuty i chorego dla analizy, profilaktyki i regeneracji zdrowia.`,
        modules: [
            {
                list: [
                    `Trening QI GONG.`,
                    `Istota QI GONG w pracy z TCM.`,
                    `Kliniczne zastosowanie.`
                ],
                amount: 8
            }
        ]
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trainingModulesList);


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 9996:
/***/ ((module) => {

module.exports = import("@react-spring/web");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,4729,8183,2066,2250], () => (__webpack_exec__(818)));
module.exports = __webpack_exports__;

})();