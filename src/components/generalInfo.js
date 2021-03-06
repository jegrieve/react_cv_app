import React from 'react';
import './GeneralInfo.css';
import uniqid from 'uniqid';

const GeneralInfo = (props) => {
  let tags = ['First Name: ', 'Last Name: ', 'Email: ', 'Phone Number: '];
  const { formInfo } = props;

  return (
    <div className="general-info-divs">
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

export default GeneralInfo;
