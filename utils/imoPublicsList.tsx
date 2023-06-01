import { TFunction } from 'i18next';
import ElementRef from '@/components/elementRef/ElementRef';

interface Publics {
  header: string;
  author: string;
  short?: string;
  doc: string;
  english?: boolean;
}

interface Sector {
  year: number;
  publics: Publics[];
}

interface PublicsConverted {
  header: string;
  author: string;
  short?: JSX.Element;
  doc: string;
  english?: boolean;
}

interface SectorConverted {
  year: number;
  publics: PublicsConverted[];
}

const imoPublicsList = (
  t: TFunction<'translation', undefined, 'translation'>
): SectorConverted[] => {
  const publicsListTrans: Sector[] = t('imoPublikacje:faqList', {
    returnObjects: true,
  });

  const newPublicsList: SectorConverted[] = publicsListTrans.map((article) => {
    const newPublics = article.publics.map((item) => {
      let newItem: PublicsConverted = {
        header: item.header,
        author: item.author,
        short: <></>,
        doc: item.doc,
        english: item.english,
      };
      newItem.short = <ElementRef element='div' content={item.short!} />;
      if (!item.short) {
        newItem = {
          header: item.header,
          author: item.author,
          doc: item.doc,
          english: item.english,
        };
      }

      return newItem;
    });

    return { year: article.year, publics: newPublics };
  });

  const imoPublicsList: SectorConverted[] = newPublicsList;

  return imoPublicsList;
};

export default imoPublicsList;
