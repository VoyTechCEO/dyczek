import React from 'react';
import akademiaOpinionsStyles from './akademiaOpinions.module.css';
import akademiaOpinions from '@/utils/akademiaOpinions';

const AkademiaOpinions = () => {
  return (
    <>
      <ul className={`container ${akademiaOpinionsStyles.container}`}>
        {akademiaOpinions.map((item, index) => {
          return (
            <li key={`${item.question}akademiaChQuestion${index}`}>
              <div className={akademiaOpinionsStyles.border} />
              <h1>{item.question}</h1>
              <p className={akademiaOpinionsStyles.declaration}>
                ({item.declaration})
              </p>
              <ul className={akademiaOpinionsStyles.years}>
                {item.opinions.map((yearOpinionItem, yearOpinionIndex) => {
                  return (
                    <li
                      key={`${yearOpinionItem.opinion}akademiaChYearOpinion${yearOpinionIndex}`}
                    >
                      <h4 className={akademiaOpinionsStyles.year}>
                        {yearOpinionItem.year}
                      </h4>
                      <ul className={akademiaOpinionsStyles.texts}>
                        {yearOpinionItem.opinion.map(
                          (opinionItem, opinionIndex) => {
                            return (
                              <li
                                key={`${opinionItem.text}akademiaChOpinion${opinionIndex}`}
                                className={akademiaOpinionsStyles.quote}
                              >
                                {opinionItem.name ? (
                                  <h4>{opinionItem.name}</h4>
                                ) : (
                                  <h4>Anonim</h4>
                                )}
                                {opinionItem.text && <p>{opinionItem.text}</p>}
                                {opinionItem.list && (
                                  <ul>
                                    {opinionItem.list.map(
                                      (opinionListItem, opinionListIndex) => {
                                        return (
                                          <li
                                            key={`${opinionListItem}akademiaChOpinionList${opinionListIndex}`}
                                          >
                                            {opinionListItem}
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AkademiaOpinions;
