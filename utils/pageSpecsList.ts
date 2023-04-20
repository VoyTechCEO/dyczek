import { TFunction } from 'i18next';
import PageSpecs from '../interfaces/pageSpecs';
import SubNavItem from '@/interfaces/subNavItem';

const pageSpecsList = (
  t: TFunction<'translation', undefined, 'translation'>
): PageSpecs[] => {
  const akademiaChList: SubNavItem[] = t('main:akademiaChNav', {
    returnObjects: true,
  });
  const akuChiroList: SubNavItem[] = t('main:akuChiroNav', {
    returnObjects: true,
  });
  const imoList: SubNavItem[] = t('main:imoNav', {
    returnObjects: true,
  });

  const pageSpecsList: PageSpecs[] = [
    {
      name: `akademiaCh`,
      subNavContent: akademiaChList,
      title: `AKADEMIA CHIROPRAKTYKI`,
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
      subNavContent: akuChiroList,
      title: `Henryk Dyczek - akupunktura i chiropraktyka`,
      keywords: `akupunktura, chiropraktyka, henryk dyczek, medycyna niekonwencjonalna`,
      description: ``,
      sinceYear: 1999,
    },
    {
      name: `imo`,
      subNavContent: imoList,
      title: `Instytut Medycyny Orientalnej`,
      keywords: `instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek`,
      description: ``,
      sinceYear: 1999,
    },
  ];

  return pageSpecsList;
};

export default pageSpecsList;
