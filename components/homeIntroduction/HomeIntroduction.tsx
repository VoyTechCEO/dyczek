import React, { useEffect, useState } from 'react';
import homeIntroductionStyles from './homeIntroduction.module.css';

const HomeIntroduction = () => {
  const profileImages: string[] = [
    '/img/dyczekHenryk.jpg',
    '/img/dyczekHenryk1.jpg',
    '/img/dyczekHenryk2.jpg',
    '/img/dyczekHenryk3.jpg',
  ];
  const [currentImg, setCurrentImg] = useState(profileImages[0]);
  const [previousImg, setPreviousImg] = useState(
    profileImages[profileImages.length - 1]
  );
  const changeImage = () => {
    setPreviousImg((previousImg) => {
      const previous = profileImages.indexOf(previousImg);
      if (previous === profileImages.length - 1) {
        return profileImages[0];
      } else {
        return profileImages[previous + 1];
      }
    });
    setCurrentImg((currentImg) => {
      const current = profileImages.indexOf(currentImg);
      if (current === profileImages.length - 1) {
        return profileImages[0];
      } else {
        return profileImages[current + 1];
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 7000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <article className={`container ${homeIntroductionStyles.container}`}>
        <div className={homeIntroductionStyles.profiles}>
          {profileImages.map((item, index) => {
            return (
              <img
                key={`${item}homeProfilePic${index}`}
                className={`${
                  currentImg === item
                    ? homeIntroductionStyles.visible
                    : previousImg === item
                    ? homeIntroductionStyles.previous
                    : homeIntroductionStyles.invisible
                }`}
                src={item}
                alt='Dyczek Henryk'
              />
            );
          })}
        </div>
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
