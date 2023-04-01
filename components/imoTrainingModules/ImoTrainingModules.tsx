import React from 'react';

interface Props {
  contentList: string[];
  number: number;
}

const ImoTrainingModules = ({ contentList, number }: Props) => {
  return (
    <>
      <li>
        <h4>Moduł {number}</h4>
        <ul>
          {contentList.map((item) => {
            return <li key={`${item}trainingmodules`}>{item}</li>;
          })}
        </ul>
      </li>
    </>
  );
};

export default ImoTrainingModules;
