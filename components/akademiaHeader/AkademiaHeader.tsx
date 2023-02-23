import React from 'react';
import akademiaHeaderStyles from './akademiaHeader.module.css';

const AkademiaHeader = () => {
  return (
    <>
      <section className={`container ${akademiaHeaderStyles.container}`}>
        <div className={akademiaHeaderStyles.baner} />
      </section>
    </>
  );
};

export default AkademiaHeader;
