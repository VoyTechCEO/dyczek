import SubNavItem from '../interfaces/subNavItem';

interface PageSpecs {
  name: string;
  subNavContent: SubNavItem[];
  title: string;
  keywords: string;
  description: string;
}

const pageSpecsList: PageSpecs[] = [
  {
    name: `akademiaCh`,
    subNavContent: [
      {
        name: `Główna`,
        link: `/akademia_chiropraktyki`,
      },
      {
        name: `O Akademii`,
        link: `/akademia_chiropraktyki/o_akademii`,
      },
      {
        name: `Terminologia`,
        link: `/akademia_chiropraktyki/terminologia`,
      },
      {
        name: `Fakty`,
        link: `/akademia_chiropraktyki/fakty`,
      },
      {
        name: `Praktyka`,
        link: `/akademia_chiropraktyki/praktyka`,
      },
      {
        name: `Kurs`,
        link: `/akademia_chiropraktyki/kurs`,
      },
      {
        name: `Absolwenci`,
        link: `/akademia_chiropraktyki/absolwenci`,
      },
      {
        name: `Kontakt`,
        link: `/akademia_chiropraktyki/kontakt`,
      },
    ],
    title: `AKADEMIA CHIROPRAKTYKI`,
    keywords: `akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk`,
    description: ``,
  },
  {
    name: `akuChiro`,
    subNavContent: [
      {
        name: `Główna`,
        link: `/akupunktura_chiropraktyka`,
      },
      {
        name: `Kwalifikacje`,
        link: `/akupunktura_chiropraktyka/kwalifikacje`,
      },
      {
        name: `Publikacje`,
        link: `/akupunktura_chiropraktyka/publikacje`,
      },
      {
        name: `Kontakt`,
        link: `/akupunktura_chiropraktyka/kontakt`,
      },
      {
        name: `English`,
        link: `/akupunktura_chiropraktyka/english`,
      },
    ],
    title: `Henryk Dyczek - akupunktura i chiropraktyka`,
    keywords: `akupunktura, chiropraktyka, henryk dyczek, medycyna niekonwencjonalna`,
    description: ``,
  },
  {
    name: `imo`,
    subNavContent: [
      {
        name: `Główna`,
        link: `/instytut_medycyny_orientalnej`,
      },
      {
        name: `Szkolenia`,
        link: `/instytut_medycyny_orientalnej/szkolenia`,
      },
      {
        name: `Teksty źródłowe`,
        link: `/instytut_medycyny_orientalnej/teksty_zrodlowe`,
      },
      {
        name: `Gabinety TMC`,
        link: `/instytut_medycyny_orientalnej/gabinety_tmc`,
      },
      {
        name: `Wydarzenia`,
        link: `/instytut_medycyny_orientalnej/wydarzenia`,
      },
      {
        name: `Linki`,
        link: `/instytut_medycyny_orientalnej/linki`,
      },
      {
        name: `Kontakt`,
        link: `/instytut_medycyny_orientalnej/kontakt`,
      },
    ],
    title: `Instytut Medycyny Orientalnej`,
    keywords: `instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek`,
    description: ``,
  },
];

export default pageSpecsList;
