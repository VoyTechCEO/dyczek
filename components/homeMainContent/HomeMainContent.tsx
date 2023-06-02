import Link from 'next/link';
import React from 'react';
import homeMainContentStyles from './homeMainContent.module.css';
import { useTranslation } from 'next-i18next';
import ElementRef from '../elementRef/ElementRef';
import { useRecoilState } from 'recoil';
import { isLangBtnClosedState } from '@/recoilMain';
import LangChangeBtn from '../langChangeBtn/LangChangeBtn';

interface Company {
  name: string;
  text: string;
  span?: string;
  link?: string;
}

interface School {
  name: string;
  link: string;
}

const HomeMainContent = () => {
  const { t } = useTranslation();
  const institutionsList: Company[] = t('homeMain:institutionsList', {
    returnObjects: true,
  });
  const schoolsList: School[] = t('homeMain:schoolsList', {
    returnObjects: true,
  });

  const [isLangBtnClosed, setIsLangBtnClosed] =
    useRecoilState(isLangBtnClosedState);

  return (
    <>
      <div className={`container ${homeMainContentStyles.container}`}>
        <article className={homeMainContentStyles.frame}>
          <div className={homeMainContentStyles.edge} />
          <ElementRef element='p' content={t('homeMain:intro')} />
          <ul>
            {institutionsList.map((item, index) => {
              return (
                <li key={`${item.name}homeMainInstitution${index}`}>
                  <strong>{item.name}</strong>
                  {` `}
                  {item.text}.{` `}
                  {item.span ? <span>{item.span}</span> : ``}
                  {` `}
                  {item.link ? (
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      {t('homeMain:institutionButtonShow')}
                    </a>
                  ) : (
                    ``
                  )}
                </li>
              );
            })}
          </ul>
          <p>{t('homeMain:header1')}</p>
          <ul>
            {schoolsList.map((item, index) => {
              return (
                <li key={`${item.name}homeMainSchool${index}`}>
                  <strong>{item.name}</strong> -{' '}
                  <Link href={item.link} target='_blank' rel='noreferrer'>
                    {t('homeMain:schoolButtonShow')}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ElementRef element='p' content={t('homeMain:imo')} />
          <h3>
            <Link
              href='/instytut_medycyny_orientalnej/publikacje'
              target='_blank'
              rel='noreferrer'
            >
              {t('homeMain:publications')}
            </Link>
          </h3>
          <div className={homeMainContentStyles.edge} />
        </article>
      </div>
      {!isLangBtnClosed && <LangChangeBtn />}
    </>
  );
};

export default HomeMainContent;
