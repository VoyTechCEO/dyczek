import React from 'react';
import homeMainContentStyles from './homeMainContent.module.css';

const HomeMainContent = () => {
  return (
    <>
      <div className={`container ${homeMainContentStyles.container}`}>
        <article className={homeMainContentStyles.frame}></article>
      </div>
    </>
  );
};

export default HomeMainContent;
