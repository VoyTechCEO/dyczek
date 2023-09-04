import React, { useState } from 'react';
import akademiaAdminGraduateStyles from './akademiaAdminGraduate.module.css';
import AkademiaWarningBtn from '../akademiaWarningBtn/AkademiaWarningBtn';

const AkademiaAdminGraduate = () => {
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const postGraduate = async () => {
    const res = await fetch(`https://dyczek.netlify.app/api/graduates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        year: year,
        name: name,
      }),
    });
    const data = await res.json();
    if (data.comment === 'Posted') {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const SuccessInfo = () => {
    return (
      <>
        <p className={akademiaAdminGraduateStyles.success}>
          Pomyślnie dodano absolwenta.
        </p>
      </>
    );
  };

  return (
    <>
      <div className={`container ${akademiaAdminGraduateStyles.container}`}>
        <div className={akademiaAdminGraduateStyles.label}>
          <p>Wprowadź rocznik:</p>
          <input
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className={akademiaAdminGraduateStyles.label}>
          <p>Wprowadź imię i nazwisko absolwenta:</p>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {isSuccess && <SuccessInfo />}
        <AkademiaWarningBtn
          btnContent='Dodaj absolwenta'
          func={postGraduate}
          warning='Po dodaniu absolwenta, będzie on widoczny w tabeli dostępnej dla wszystkich użytkowników strony.'
        />
      </div>
    </>
  );
};

export default AkademiaAdminGraduate;
