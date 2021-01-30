import React from 'react';
import uniqid from 'uniqid';

const ExperienceInfo = (props) => {
  let tags = [
    'Company Name: ',
    'Position at Company: ',
    'Tasks at Job: ',
    'Start date: ',
    'End date: ',
  ];
  const { formInfo } = props;

  return (
    <div>
      {formInfo.map((data, i) => {
        return (
          <div>
            <span className="bold-font">{tags[i]}</span>
            <span key={uniqid()}>{data}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceInfo;
