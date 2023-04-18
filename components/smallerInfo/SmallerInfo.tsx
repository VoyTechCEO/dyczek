import React from 'react';
import smallerInfoStyles from './smallerInfo.module.css';
import { TFunction } from 'i18next';

interface Props {
  t: TFunction<'translation', undefined, 'translation'>;
}

const SmallerInfo = ({ t }: Props) => {
  return (
    <div className={`container ${smallerInfoStyles.container}`}>
      <p>{t('imoMain:smallerInfo')}</p>
    </div>
  );
};

export default SmallerInfo;
