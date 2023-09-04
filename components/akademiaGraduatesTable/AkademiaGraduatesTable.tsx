import React from 'react';
import akademiaGraduatesTableStyles from './akademiaGraduatesTable.module.css';
import { akademiaGraduates } from '@/utils/akademiaGraduates';
import { useTranslation } from 'next-i18next';
import YearClass from '@/interfaces/yearClass';
import { useRecoilState } from 'recoil';
import { isUserLoggedInState } from '@/recoilMain';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

interface Props {
  newGrad?: YearClass[];
}

interface BtnProps {
  year: string;
  name: string;
}

const DeleteBtn = ({ year, name }: BtnProps) => {
  const router = useRouter();
  const deleteGraduate = async () => {
    try {
      await fetch(`https://dyczek.netlify.app/api/graduates/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year: year,
          name: name,
        }),
      });
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className={akademiaGraduatesTableStyles.delete}
      onClick={deleteGraduate}
    >
      <svg
        width='15'
        version='1.1'
        viewBox='0 0 52.917 52.917'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m16.734 43.194-9.7247 9.7221-7.0088-7.0088 19.444-19.449-19.444-19.449 7.0088-7.0088 19.449 19.444 19.449-19.444 7.0088 7.0088-19.444 19.449 19.444 19.449-7.0088 7.0088-19.449-19.444z'
          strokeWidth='.26458'
        />
      </svg>
    </button>
  );
};

const AkademiaGraduatesTable = ({ newGrad }: Props) => {
  const { t } = useTranslation();

  const [isUserLoggedIn, setIsUserLoggedIn] =
    useRecoilState(isUserLoggedInState);

  let graduateNumber = 0;
  let ckNum = 0;

  if (newGrad) {
    akademiaGraduates.forEach((yearGroup) => {
      graduateNumber += yearGroup.graduates.length;
    });
  }

  // --- responsive design START --- //
  const isSmallerScreen = useMediaQuery({ maxWidth: 750 });
  // --- responsive design END --- //

  return (
    <>
      <div className={`container ${akademiaGraduatesTableStyles.container}`}>
        {!newGrad ? (
          <>
            <table>
              <tbody>
                {isSmallerScreen ? (
                  <tr>
                    <th>{t('akademiaChGraduatesList:yearRWD')}</th>
                    <th>{t('akademiaChGraduatesList:dcNumRWD')}</th>
                    <th>{t('akademiaChGraduatesList:name')}</th>
                  </tr>
                ) : (
                  <tr>
                    <th>{t('akademiaChGraduatesList:year')}</th>
                    <th>{t('akademiaChGraduatesList:dcNum')}</th>
                    <th>{t('akademiaChGraduatesList:name')}</th>
                  </tr>
                )}
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
                              <td rowSpan={item.graduates.length}>
                                {item.year}
                              </td>
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
            </table>
          </>
        ) : (
          <>
            <table>
              <tbody>
                {isSmallerScreen ? (
                  <tr>
                    <th>{t('akademiaChGraduatesList:yearRWD')}</th>
                    <th>{t('akademiaChGraduatesList:ckNumRWD')}</th>
                    <th>{t('akademiaChGraduatesList:name')}</th>
                  </tr>
                ) : (
                  <tr>
                    <th>{t('akademiaChGraduatesList:year')}</th>
                    <th>{t('akademiaChGraduatesList:ckNum')}</th>
                    <th>{t('akademiaChGraduatesList:name')}</th>
                    <th>{t('akademiaChGraduatesList:gradNum')}</th>
                  </tr>
                )}
                {newGrad.map((item, index) => {
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
                              <td rowSpan={item.graduates.length}>
                                {item.year}
                              </td>
                              <td>{ckNum}</td>
                              <td>
                                {graduateItem}
                                {isUserLoggedIn && !isSmallerScreen && (
                                  <DeleteBtn
                                    year={item.year.toString()}
                                    name={graduateItem}
                                  />
                                )}
                              </td>
                              {!isSmallerScreen && <td>{graduateNumber}</td>}
                            </tr>
                          );
                        }

                        return (
                          <tr
                            key={`${graduateItem}akademiaChGraduateNew${graduateIndex}`}
                          >
                            <td>{ckNum}</td>
                            <td>
                              {graduateItem}
                              {isUserLoggedIn && !isSmallerScreen && (
                                <DeleteBtn
                                  year={item.year.toString()}
                                  name={graduateItem}
                                />
                              )}
                            </td>
                            {!isSmallerScreen && <td>{graduateNumber}</td>}
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default AkademiaGraduatesTable;
