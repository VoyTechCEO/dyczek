import { TFunction } from 'i18next';
import PageSpecs from '../interfaces/pageSpecs';
import SubNavItem from '@/interfaces/subNavItem';

interface Specs {
  nav: SubNavItem[];
  title: string;
  description: string;
}

const pageSpecsList = (
  t: TFunction<'translation', undefined, 'translation'>
): PageSpecs[] => {
  const homeDyczekSpecs: Specs = t('main:homeDyczekSpecs', {
    returnObjects: true,
  });
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
      subNavContent: homeDyczekSpecs.nav,
      title: homeDyczekSpecs.title,
      keywords: `henryk dyczek, dyczek, medycyna niekonwencjonalna, akupunktura, chiropraktyka`,
      description: homeDyczekSpecs.description,
      favicon: `/svg/henryk_dyczek_favicon.svg`,
      sinceYear: 2008,
    },
    {
      name: `akademiaCh`,
      subNavContent: akademiaChSpecs.nav,
      title: akademiaChSpecs.title,
      keywords: `akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk`,
      description: akademiaChSpecs.description,
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
      description: akuChiroSpecs.description,
      favicon: `/img/akupunktura_chiropraktyka_favicon.png`,
      sinceYear: 1999,
    },
    {
      name: `imo`,
      subNavContent: imoSpecs.nav,
      title: imoSpecs.title,
      keywords: `instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek`,
      description: imoSpecs.description,
      favicon: `/img/instytutMedycynyOrientalnej.png`,
      sinceYear: 1999,
    },
    {
      name: `szlaZd`,
      subNavContent: szlaZdSpecs.nav,
      title: szlaZdSpecs.title,
      keywords: `szlachetne zdrowie, zdrowie, health, noble health, henryk dyczek`,
      description: szlaZdSpecs.description,
      favicon: `/svg/szlachetne_zdrowie_favicon.svg`,
      sinceYear: 2009,
    },
  ];

  return pageSpecsList;
};

export default pageSpecsList;
