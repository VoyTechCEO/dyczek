import React from 'react';
import langChangeBtnStyles from './langChangeBtn.module.css';
import { useRouter } from 'next/router';

const LangChangeBtn = () => {
  const router = useRouter();

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
        <button onClick={() => {}}>
          {router.locale === `en` ? `Polish` : `English`} version
        </button>
      </div>
    </>
  );
};

export default LangChangeBtn;
