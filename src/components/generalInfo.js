import React from 'react';
import './GeneralInfo.css';
import uniqid from 'uniqid';

const GeneralInfo = (props) => {
  //   const submitGeneralInfo = (e) => {
  //     e.preventDefault();
  //     const formInputs = document.getElementById('general-info-form');
  //     let infoArray = [];
  //     for (let i = 0; i < formInputs.length; i++) {
  //       infoArray.push(formInputs[i].value);
  //     }
  //     props.submitGeneralInfoToParent(infoArray);
  //     //I want each input to then turn into a <p> with the value
  //     //I want the submit button to turn into an edit button

  //     //need to do more stuff here (create edit button etc.)
  //   };

  //   <ul>
  //   {tasks.map((task, i) => {
  //     return (
  //       <li style={{ listStyleType: 'none' }} key={uniqid()}>
  //         {i + 1 + '. '}
  //         {task + ' '}
  //         <button id={i} onClick={props.deleteTaskItem}>
  //           Delete
  //         </button>
  //         <button>Edit</button>
  //       </li>
  //     );
  //   })}
  // </ul>
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
