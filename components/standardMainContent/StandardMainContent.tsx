import React from 'react';
import SubNav from '../subNav/SubNav';
import standardMainContentStyles from './standardMainContent.module.css';
import LangChangeBtn from '../../components/langChangeBtn/LangChangeBtn';
import { isLangBtnClosedState, isUserLoggedInState } from '@/recoilMain';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import LogoutBtn from '../logoutBtn/LogoutBtn';

interface Props {
  children: JSX.Element;
}

const StandardMainContent = ({ children }: Props) => {
  const [isLangBtnClosed, setIsLangBtnClosed] =
    useRecoilState(isLangBtnClosedState);
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useRecoilState(isUserLoggedInState);
  const router = useRouter();

  return (
    <>
      <section
        className={`container ${standardMainContentStyles.container} ${
          router.pathname.includes(`/akademia_chiropraktyki`) &&
          standardMainContentStyles.akademia_ch
        }`}
      >
        <SubNav />
        <div>{children}</div>
      </section>
      {!isLangBtnClosed && !router.pathname.includes('[') && <LangChangeBtn />}
      {isUserLoggedIn && <LogoutBtn />}
    </>
  );
};

export default StandardMainContent;
