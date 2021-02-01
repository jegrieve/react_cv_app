import React from 'react';
import uniqid from 'uniqid';

const EducationalInfo = (props) => {
  let tags = ['School Name: ', 'Title of Study: ', 'Date of Completion: '];
  const { formInfo } = props;

  return (
    <div>
      {formInfo.map((data, i) => {
        return (
          <div key={uniqid()}>
            <span className="bold-font">{tags[i]}</span>
            <span>{data}</span>
          </div>
        );
      })}
    </div>
  );
};

export default EducationalInfo;
