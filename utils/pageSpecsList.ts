import { TFunction } from 'i18next';
import PageSpecs from '../interfaces/pageSpecs';
import SubNavItem from '@/interfaces/subNavItem';

interface Specs {
  nav: SubNavItem[];
  title: string;
}

const pageSpecsList = (
  t: TFunction<'translation', undefined, 'translation'>
): PageSpecs[] => {
  const akademiaChSpecs: Specs = t('main:akademiaChSpecs', {
    returnObjects: true,
  });
  const akuChiroSpecs: Specs = t('main:akuChiroSpecs', {
    returnObjects: true,
  });
  const imoSpecs: Specs = t('main:imoSpecs', {
    returnObjects: true,
  });
  const szlaZdSpecs: Specs = t('main:szlaZdSpecs', {
    returnObjects: true,
  });

  const pageSpecsList: PageSpecs[] = [
    {
      name: `homeDyczek`,
      subNavContent: [
        {
          name: `homeDyczek`,
          link: `/`,
        },
      ],
      title: `Henryk Dyczek - medycyna niekonwencjonalna`,
      keywords: `henryk dyczek, dyczek, medycyna niekonwencjonalna, akupunktura, chiropraktyka`,
      description: `Nazywam się Henryk Dyczek, jestem dyplomowanym akupunkturzystą i chiropraktykiem zrzeszonym w Polskim Towarzystwie Medycyny Manualnej, British Acupuncture Council oraz British Association for Applied Chiropractic. `,
      favicon: `/svg/henryk_dyczek_favicon.svg`,
      sinceYear: 2008,
    },
    {
      name: `akademiaCh`,
      subNavContent: akademiaChSpecs.nav,
      title: akademiaChSpecs.title,
      keywords: `akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk`,
      description: `Dowiedz się więcej o działalności oraz założeniach Akademii Chiropraktyki - zobacz dostępne szkolenia i kursy!`,
      favicon: `/svg/akademia_chiropraktyki_favicon.svg`,
      sinceYear: 1999,
      socialIcons: [
        {
          name: `Facebook Akademia Chiropraktyki`,
          image: `/img/facebook.webp`,
          link: `https://fb.watch/iUeTioOtwn/`,
        },
      ],
    },
    {
      name: `akuChiro`,
      subNavContent: akuChiroSpecs.nav,
      title: akuChiroSpecs.title,
      keywords: `akupunktura, chiropraktyka, henryk dyczek, medycyna niekonwencjonalna`,
      description: `Poznaj czym są akupunktura i chiropraktyka, oraz z jakimi problemami one pomagają. Skontaktuj się ze specjalistą przez internet!`,
      favicon: `/img/akupunktura_chiropraktyka_favicon.png`,
      sinceYear: 1999,
    },
    {
      name: `imo`,
      subNavContent: imoSpecs.nav,
      title: imoSpecs.title,
      keywords: `instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek`,
      description: `Instytut Medycyny Orientalnej; poznaj jego cele, misje i filozofię, bądź podziel się z nami własną wiedzą i doświadczeniem.`,
      favicon: `/img/instytutMedycynyOrientalnej.png`,
      sinceYear: 1999,
    },
    {
      name: `szlaZd`,
      subNavContent: szlaZdSpecs.nav,
      title: szlaZdSpecs.title,
      keywords: `szlachetne zdrowie, zdrowie, health, noble health, henryk dyczek`,
      description: `Zdrowie jest poważną sprawą, więc dzielę się moim ponad trzydziestoletnim doświadczeniem klinicznym, jak zdrowo żyć i jak się starzeć nie będąc ciężarem dla innych.`,
      favicon: `/svg/szlachetne_zdrowie_favicon.svg`,
      sinceYear: 2009,
    },
  ];

  return pageSpecsList;
};

export default pageSpecsList;
