import React from 'react';
import commonErrorStyles from './commonError.module.css';

interface Props {
  content: string;
}

const CommonError = ({ content }: Props) => {
  return (
    <>
      <div className={`container ${commonErrorStyles.container}`}>
        <h2>Wystąpił błąd.</h2>
        <h2>{content}</h2>
      </div>
    </>
  );
};

export default CommonError;
