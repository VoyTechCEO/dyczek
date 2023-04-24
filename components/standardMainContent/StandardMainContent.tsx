import React from 'react';
import SubNav from '../subNav/SubNav';
import standardMainContentStyles from './standardMainContent.module.css';
import SubNavItem from '../../interfaces/subNavItem';
import LangChangeBtn from '../../components/langChangeBtn/LangChangeBtn';
import { isLangBtnClosedState } from '@/recoilMain';
import { useRecoilState } from 'recoil';

interface Props {
  subNavItems: SubNavItem[];
  children: JSX.Element;
}

const StandardMainContent = ({ subNavItems, children }: Props) => {
  const [isLangBtnClosed, setIsLangBtnClosed] =
    useRecoilState(isLangBtnClosedState);

  return (
    <>
      <section className={`container ${standardMainContentStyles.container}`}>
        <SubNav subNavItems={subNavItems} />
        <div>{children}</div>
      </section>
      {!isLangBtnClosed && <LangChangeBtn />}
    </>
  );
};

export default StandardMainContent;
