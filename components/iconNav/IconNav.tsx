import Link from 'next/link';
import React from 'react';
import iconNavStyles from './iconNav.module.css';
import IconNavItem from '../../interfaces/iconNavItem';

interface Props {
  navItems: IconNavItem[];
}

const IconNav = ({ navItems }: Props) => {
  return (
    <>
      <ul className={`container ${iconNavStyles.container}`}>
        {navItems.map((item, index) => {
          return (
            <li key={`${item}${index}`}>
              <Link href={item.link}>
                <img
                  className={item.showName ? iconNavStyles.text : ``}
                  src={item.src}
                  alt={item.name}
                />
                {item.showName ? <h3>{item.name}</h3> : ``}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IconNav;
