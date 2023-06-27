import React, { MouseEventHandler } from 'react';
import akademiaWarningBtnStyles from './akademiaWarningBtn.module.css';

interface Props {
  btnContent: string;
  func: MouseEventHandler<HTMLButtonElement> | undefined;
  warning: string;
}

const AkademiaWarningBtn = ({ btnContent, func, warning }: Props) => {
  return (
    <>
      <div className={`container ${akademiaWarningBtnStyles.container}`}>
        <button onClick={func}>{btnContent}</button>
        <svg
          id='Warstwa_1'
          data-name='Warstwa 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 56 56'
        >
          <g>
            <circle cx='28' cy='46' r='6' />
            <polyline points='24.21 36 31.95 36 35 5 21 5' />
          </g>
          <circle
            cx='28'
            cy='28'
            r='27.5'
            fill='none'
            stroke='#000'
            strokeMiterlimit='10'
          />
        </svg>
        <p className={akademiaWarningBtnStyles.warning}>{warning}</p>
      </div>
    </>
  );
};

export default AkademiaWarningBtn;
