import React from 'react';
import SubNav from '../subNav/SubNav';
import standardMainContentStyles from './standardMainContent.module.css';
import SubNavItem from '../../interfaces/subNavItem';

interface Props {
  subNavItems: SubNavItem[];
  children: JSX.Element;
}

const StandardMainContent = ({ subNavItems, children }: Props) => {
  return (
    <>
      <section className={`container ${standardMainContentStyles.container}`}>
        <SubNav subNavItems={subNavItems} />
        <div>{children}</div>
      </section>
    </>
  );
};

export default StandardMainContent;
