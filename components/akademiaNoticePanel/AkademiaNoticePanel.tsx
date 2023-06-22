import React from 'react';
import akademiaNoticePanelStyles from './akademiaNoticePanel.module.css';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { isUserLoggedInState } from '@/recoilMain';

interface Props {
  id: string;
  title: string;
  desc: string;
  date: string;
}

const AkademiaNoticePanel = ({ id, title, desc, date }: Props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useRecoilState(isUserLoggedInState);

  const deleteNotice = () => {
    fetch(`/api/notices/advanced/${id}`, {
      method: `DELETE`,
    });
  };

  return (
    <>
      <li className={`container ${akademiaNoticePanelStyles.container}`}>
        <Link
          className={`container ${akademiaNoticePanelStyles.container}`}
          href={`/akademia_chiropraktyki/szkolenie_zaawansowane/${id}/`}
        >
          <h4>{date}</h4>
          <h2>{title}</h2>
          <p>{desc}</p>
        </Link>
        {isUserLoggedIn && (
          <button
            className={akademiaNoticePanelStyles.delete}
            onClick={deleteNotice}
          >
            <svg
              width='15'
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
        )}
      </li>
    </>
  );
};

export default AkademiaNoticePanel;
