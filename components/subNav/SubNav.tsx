import Link from 'next/link';
import React from 'react';
import SubNavItem from '../../interfaces/subNavItem';
import subNavStyles from './subNav.module.css';

interface Props {
  subNavItems: SubNavItem[];
}

const SubNav = ({ subNavItems }: Props) => {
  return (
    <>
      <ul className={`container ${subNavStyles.container}`}>
        {subNavItems.map((item, index) => {
          return (
            <li key={`${item}${index}akuChi`}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SubNav;
