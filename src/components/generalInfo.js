import React from 'react';
import './GeneralInfo.css';

const GeneralInfo = (props) => {
  const submitGeneralInfo = (e) => {
    e.preventDefault();
    const formInputs = document.getElementById('general-info-form');
  };

  return (
    <div>
      <form id="general-info-form">
        <label htmlFor="first-name">First Name:</label>
        <input id="first-name" />
        <label htmlFor="last-name">Last Name:</label>
        <input id="last-name" />
        <label htmlFor="email">Email:</label>
        <input id="email" />
        <label htmlFor="phone-number">Phone Number:</label>
        <input id="phone-number" />
        <button onClick={submitGeneralInfo}>Submit</button>
      </form>
      <hr />
    </div>
  );
};

export default GeneralInfo;
