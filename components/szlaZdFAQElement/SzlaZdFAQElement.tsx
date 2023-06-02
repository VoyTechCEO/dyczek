import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

interface Props {
  number: number;
  question: string;
  answer: JSX.Element;
}

const SzlaZdFAQElement = ({ number, question, answer }: Props) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <li className='faq_element'>
        <button className='head' onClick={() => setShow(!show)}>
          <h4>{number}</h4>
          <p className='question'>{question}</p>
          {/* zamiast znikać niech zjeżdża na dół */}
          {!show && (
            <div className='more'>
              <p>{t('szlaZdQuestions:buttonShow')}</p>
              <svg
                height='4mm'
                version='1.1'
                viewBox='0 0 117.34 130.48'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='translate(-45.45 -69.417)'>
                  <path d='m151.77 70.967a5.2917 5.2917 0 00-7.4836 0l-40.166 40.166-40.166-40.166a5.2917 5.2917 0 00-7.4835 0l-9.4725 9.4725a5.2917 5.2917 0 001e-6 7.4836l53.38 53.38a5.2917 5.2917 0 007.4836 0l53.38-53.38a5.2917 5.2917 0 000-7.4836z' />
                  <path d='m151.77 128.01a5.2917 5.2917 0 00-7.4836 0l-40.166 40.166-40.166-40.166a5.2917 5.2917 0 00-7.4835 0l-9.4725 9.4725a5.2917 5.2917 0 001e-6 7.4836l53.38 53.38a5.2917 5.2917 0 007.4836 0l53.38-53.38a5.2917 5.2917 0 000-7.4836z' />
                </g>
              </svg>
            </div>
          )}
        </button>
        {show && answer}
      </li>
    </>
  );
};

export default SzlaZdFAQElement;
