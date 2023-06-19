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
          viewBox='0 0 154 224.34'
        >
          <path d='m62.41,38.52L11,9v185.08c0,1.81.97,3.48,2.53,4.38l43.91,25.21c3.36,1.93,7.56-.5,7.56-4.38V42.98c0-1.84-.99-3.55-2.59-4.47Z' />
          <path d='m151.88,95.87l-31.26-25.59c-3.78-3.09-9.45-.4-9.45,4.48v15.92h-34.01c-3.2,0-5.79,2.59-5.79,5.79v6.95c0,3.2,2.59,5.79,5.79,5.79h34.01v16.73c0,4.88,5.67,7.57,9.45,4.48l31.26-25.59c2.83-2.31,2.83-6.64,0-8.95Z' />
          <path d='m122.56,137.42c-1.03.85-2.18,1.33-3.34,1.52-.71.12-1.22.76-1.22,1.48v44.06c0,1.94-1.57,3.52-3.52,3.52H15.52c-1.94,0-3.52-1.57-3.52-3.52V15.52c0-1.94,1.57-3.52,3.52-3.52h98.97c1.94,0,3.52,1.57,3.52,3.52v44.95c0,.72.51,1.37,1.22,1.48,1.16.19,2.31.68,3.34,1.52l4.97,4.06c.99.81,2.48.11,2.48-1.17V8.52c0-4.7-3.81-8.52-8.52-8.52H8.52C3.81,0,0,3.81,0,8.52v182.97c0,4.7,3.81,8.52,8.52,8.52h112.97c4.7,0,8.52-3.81,8.52-8.52v-56.96c0-1.28-1.49-1.98-2.48-1.17l-4.97,4.06Z' />
        </svg>
        <span>Wyloguj się</span>
      </button>
    </>
  );
};

export default LogoutBtn;