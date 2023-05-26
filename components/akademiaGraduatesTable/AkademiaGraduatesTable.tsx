import React from 'react';
import akademiaGraduatesTableStyles from './akademiaGraduatesTable.module.css';
import {
  akademiaGraduates,
  akademiaGraduatesNew,
} from '@/utils/akademiaGraduates';

interface Props {
  newGrad?: boolean;
}

const AkademiaGraduatesTable = ({ newGrad }: Props) => {
  let graduateNumber = 0;
  let ckNum = 0;

  if (newGrad) {
    akademiaGraduates.forEach((yearGroup) => {
      graduateNumber += yearGroup.graduates.length;
    });
  }

  return (
    <>
      <div className={`container ${akademiaGraduatesTableStyles.container}`}>
        <table>
          {!newGrad ? (
            <tbody>
              <tr>
                <th>Rok akademicki</th>
                <th>Numer DC</th>
                <th>Imię i Nazwisko</th>
              </tr>
              {akademiaGraduates.map((item, index) => {
                return (
                  <React.Fragment
                    key={`${item.year}akademiaChGraduatesGroup${index}`}
                  >
                    {item.graduates.map((graduateItem, graduateIndex) => {
                      graduateNumber++;

                      if (graduateIndex === 0) {
                        return (
                          <tr
                            key={`${graduateItem}akademiaChGraduate${graduateIndex}`}
                          >
                            <td rowSpan={item.graduates.length}>{item.year}</td>
                            <td>{graduateNumber}</td>
                            <td>{graduateItem}</td>
                          </tr>
                        );
                      }

                      return (
                        <tr
                          key={`${graduateItem}akademiaChGraduate${graduateIndex}`}
                        >
                          <td>{graduateNumber}</td>
                          <td>{graduateItem}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>Rok akademicki</th>
                <th>Numer CK</th>
                <th>Imię i Nazwisko</th>
                <th>Numer absolwenta</th>
              </tr>
              {akademiaGraduatesNew.map((item, index) => {
                return (
                  <React.Fragment
                    key={`${item.year}akademiaChGraduatesGroupNew${index}`}
                  >
                    {item.graduates.map((graduateItem, graduateIndex) => {
                      ckNum++;
                      graduateNumber++;

                      if (graduateIndex === 0) {
                        return (
                          <tr
                            key={`${graduateItem}akademiaChGraduateNew${graduateIndex}`}
                          >
                            <td rowSpan={item.graduates.length}>{item.year}</td>
                            <td>{ckNum}</td>
                            <td>{graduateItem}</td>
                            <td>{graduateNumber}</td>
                          </tr>
                        );
                      }

                      return (
                        <tr
                          key={`${graduateItem}akademiaChGraduateNew${graduateIndex}`}
                        >
                          <td>{ckNum}</td>
                          <td>{graduateItem}</td>
                          <td>{graduateNumber}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default AkademiaGraduatesTable;
