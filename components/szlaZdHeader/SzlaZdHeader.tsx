import React from 'react';
import szlaZdHeaderStyles from './szlaZdHeader.module.css';

const SzlaZdHeader = () => {
  let imgList: string[] = [];

  for (let i = 1; i <= 6; i++) {
    imgList = [...imgList, `/img/szlachetneZdrowieHeadImg${i}.jpg`];
  }

  return (
    <>
      <section className={`container ${szlaZdHeaderStyles.container}`}>
        <div className={szlaZdHeaderStyles.signature}>
          <img
            src='/svg/szlachetne_zdrowie_logo.svg'
            alt='szlachetne zdrowie logo'
          />
        </div>
        <div className={szlaZdHeaderStyles.introduction}>
          <p>...to starzeć się nie będąc ciężarem dla innych.</p>
          <ul>
            {imgList.map((img, index) => {
              return (
                <li key={`${img}szlachetneZdrowie${index}`}>
                  <img src={img} alt='intro image' />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SzlaZdHeader;
