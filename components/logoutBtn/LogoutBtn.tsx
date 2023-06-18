import React from 'react';
import logoutBtnStyles from './logoutBtn.module.css';
import { useRouter } from 'next/router';

const LogoutBtn = () => {
  const router = useRouter();

  const logOut = async () => {
    await fetch(`/api/user`, {
      method: `DELETE`,
    });
    router.reload();
  };

  return (
    <>
      <button
        className={`container ${logoutBtnStyles.container}`}
        onClick={logOut}
      >
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
        <span>Wyloguj się</span>
      </button>
    </>
  );
};

export default LogoutBtn;
