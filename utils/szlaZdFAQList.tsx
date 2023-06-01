import ElementRef from '@/components/elementRef/ElementRef';
import { TFunction } from 'i18next';
import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqItemConverted {
  question: string;
  answer: JSX.Element;
}

const faqList = (
  t: TFunction<'translation', undefined, 'translation'>
): FaqItemConverted[] => {
  const faqListTrans: FaqItem[] = t('szlaZdQuestions:faqList', {
    returnObjects: true,
  });

  const newFaqList: FaqItemConverted[] = faqListTrans.map((item) => {
    let newItem: FaqItemConverted = {
      question: item.question,
      answer: <></>,
    };
    newItem.answer = <ElementRef element='section' content={item.answer} />;

    return newItem;
  });

  const faqList: FaqItemConverted[] = newFaqList;

  return faqList;
};

export default faqList;
