import React from 'react';
import homeIntroductionStyles from './homeIntroduction.module.css';

const HomeIntroduction = () => {
  return (
    <>
      <article className={`container ${homeIntroductionStyles.container}`}>
        <img src='/img/dyczekHenryk.jpg' alt='Dyczek Henryk' />
        <ul>
          <li>
            dr n. med. <span>HENRYK DYCZEK</span>, D.C. (Diploma in
            Chiropractic), B. Sc. in Chiropractic (Bachelor of Sciences in
            Chiropractic), M.A. (Master of Arts), Ac. M. (Acupuncture Master)
          </li>
          <li>Uniwersytet Medyczny w Łodzi, studia doktoranckie (2009-2013)</li>
          <li>Uniwersytet Łódzki (2003 – 2005)</li>
          <li>Lancaster University, U.K. (2003 – 2005)</li>
          <li>Oxford Brookes University, U. K. (1998 – 2002)</li>
          <li>Oxford College of Chiropractic, U.K. (1991 – 1995)</li>
          <li>The College of Traditional Acupuncture, U.K. (1985 – 1994)</li>
        </ul>
      </article>
    </>
  );
};

export default HomeIntroduction;
