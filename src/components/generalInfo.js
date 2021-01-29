import React from 'react';
import './GeneralInfo.css';
import uniqid from 'uniqid';

const GeneralInfo = (props) => {
  const { formInfo } = props;

  return (
    <div>
      {formInfo.map((data) => {
        return <div key={uniqid()}>{data}</div>;
      })}
    </div>
  );
};

export default GeneralInfo;
