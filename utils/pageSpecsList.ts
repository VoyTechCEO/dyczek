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
      description: `opis`,
      sinceYear: 1999,
    },
    {
      name: `akademiaCh`,
      subNavContent: akademiaChSpecs.nav,
      title: akademiaChSpecs.title,
      keywords: `akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk`,
      description: ``,
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
      description: ``,
      sinceYear: 1999,
    },
    {
      name: `imo`,
      subNavContent: imoSpecs.nav,
      title: imoSpecs.title,
      keywords: `instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek`,
      description: ``,
      sinceYear: 1999,
    },
    {
      name: `szlaZd`,
      subNavContent: szlaZdSpecs.nav,
      title: szlaZdSpecs.title,
      keywords: `szlachetne zdrowie, zdrowie, health, noble health, henryk dyczek`,
      description: ``,
      sinceYear: 2009,
    },
  ];

  return pageSpecsList;
};

export default pageSpecsList;
