import React from 'react';
import langChangeBtnStyles from './langChangeBtn.module.css';

const LangChangeBtn = () => {
  return (
    <>
      <div className={`container ${langChangeBtnStyles.container}`}>
        <button>English version</button>
      </div>
    </>
  );
};

export default LangChangeBtn;
