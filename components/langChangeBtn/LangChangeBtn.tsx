import React from 'react';
import langChangeBtnStyles from './langChangeBtn.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { isLangBtnClosedState } from '@/recoilMain';

const LangChangeBtn = () => {
  const router = useRouter();
  const [isLangBtnClosed, setIsLangBtnClosed] =
    useRecoilState(isLangBtnClosedState);

  let pageClass = ``;
  if (router.pathname.includes(`/akademia_chiropraktyki`)) {
    pageClass = langChangeBtnStyles.akademia_ch;
  } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
    pageClass = langChangeBtnStyles.aku_chiro;
  } else if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
    pageClass = langChangeBtnStyles.imo;
  }

  return (
    <>
      <div
        className={`container ${langChangeBtnStyles.container} ${pageClass}`}
      >
        <button
          className={langChangeBtnStyles.close}
          onClick={() => setIsLangBtnClosed(true)}
        >
          <svg
            width='10'
            version='1.1'
            viewBox='0 0 52.917 52.917'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m16.734 43.194-9.7247 9.7221-7.0088-7.0088 19.444-19.449-19.444-19.449 7.0088-7.0088 19.449 19.444 19.449-19.444 7.0088 7.0088-19.444 19.449 19.444 19.449-7.0088 7.0088-19.449-19.444z'
              strokeWidth='.26458'
            />
          </svg>
        </button>
        <Link
          href={router.pathname}
          locale={router.locale !== `en` ? `en` : `pl`}
        >
          {router.locale === `en` ? (
            <>
              <svg
                version='1.1'
                viewBox='0 0 1e3 500'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='scale(16.667)' strokeWidth='1pt'>
                  <rect width='60' height='30' fill='#006' />
                  <path
                    d='m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z'
                    fill='#fff'
                  />
                  <path
                    d='m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z'
                    fill='#fff'
                  />
                  <path d='m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z' fill='#c00' />
                  <path
                    d='m0 30 20-10h4.472l-20 10h-4.472zm0-30 20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10 20-10h4.472l-20 10h-4.472zm24.472 20-20-10h4.472l15.528 7.764v2.236z'
                    fill='#c00'
                  />
                </g>
              </svg>
              <span>Polska wersja</span>
            </>
          ) : (
            <>
              <svg
                version='1.1'
                viewBox='0 0 1e3 500'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='scale(16.667)' strokeWidth='1pt'>
                  <rect width='60' height='30' fill='#006' />
                  <path
                    d='m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z'
                    fill='#fff'
                  />
                  <path
                    d='m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z'
                    fill='#fff'
                  />
                  <path d='m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z' fill='#c00' />
                  <path
                    d='m0 30 20-10h4.472l-20 10h-4.472zm0-30 20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10 20-10h4.472l-20 10h-4.472zm24.472 20-20-10h4.472l15.528 7.764v2.236z'
                    fill='#c00'
                  />
                </g>
              </svg>
              <span>English version</span>
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default LangChangeBtn;
