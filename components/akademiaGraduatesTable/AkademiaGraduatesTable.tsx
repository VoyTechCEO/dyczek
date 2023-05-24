import React from 'react';
import akademiaGraduatesTableStyles from './akademiaGraduatesTable.module.css';

const AkademiaGraduatesTable = () => {
  return (
    <table className={`container ${akademiaGraduatesTableStyles.container}`}>
      <tr>
        <th>Rok akademicki</th>
        <th>Numer DC</th>
        <th>Imię i Nazwisko</th>
      </tr>
      <tr>
        <td rowSpan={13}>1999</td>
        <td>1</td>
        <td>Andrzej Łuczkowski</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Andrzej Łuczkowski</td>
      </tr>
    </table>
  );
};

export default AkademiaGraduatesTable;
