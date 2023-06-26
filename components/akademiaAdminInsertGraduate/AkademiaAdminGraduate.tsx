import React from 'react';
import akademiaAdminGraduateStyles from './akademiaAdminGraduate.module.css';

const AkademiaAdminGraduate = () => {
  return (
    <>
      <div className={`container ${akademiaAdminGraduateStyles.container}`}>
        <div className={akademiaAdminGraduateStyles.label}>
          <p>Wprowadź imię i nazwisko absolwenta:</p>
          <input
            type='text'
            //   value={title}
            //   onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button>Dodaj absolwenta</button>
      </div>
    </>
  );
};

export default AkademiaAdminGraduate;
