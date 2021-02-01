import React, { useState } from 'react';
import './App.css';
import EducationalInfo from './components/educationalInfo';
import ExperienceInfo from './components/experience';
import GeneralInfo from './components/generalInfo';
import logo from './assets/github-icon.png';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const [generalInfoSubmitted, setGeneralInfoSubmitted] = useState(false);
  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: '',
    titleName: '',
    schoolDateName: '',
  });
  const [educationalInfoSubmitted, setEducationalInfoSubmitted] = useState(
    false
  );
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: '',
    positionName: '',
    tasksName: '',
    startDate: '',
    endDate: '',
  });
  const [experienceInfoSubmitted, setExperienceInfoSubmitted] = useState(false);

  const updateInfo = (e) => {
    switch (e.target.id) {
      case 'first-name':
        setGeneralInfo({
          ...generalInfo,
          firstName: e.target.value,
        });
        break;
      case 'last-name':
        setGeneralInfo({
          ...generalInfo,
          lastName: e.target.value,
        });
        break;
      case 'email':
        setGeneralInfo({
          ...generalInfo,
          email: e.target.value,
        });
        break;
      case 'phone-number':
        setGeneralInfo({
          ...generalInfo,
          phoneNumber: e.target.value,
        });
        break;
      case 'school-name':
        setEducationalInfo({
          ...educationalInfo,
          schoolName: e.target.value,
        });
        break;
      case 'title-name':
        setEducationalInfo({
          ...educationalInfo,
          titleName: e.target.value,
        });
        break;
      case 'school-date-name':
        setEducationalInfo({
          ...educationalInfo,
          schoolDateName: e.target.value,
        });
        break;
      case 'company-name':
        setExperienceInfo({
          ...experienceInfo,
          companyName: e.target.value,
        });
        break;
      case 'position-name':
        setExperienceInfo({
          ...experienceInfo,
          positionName: e.target.value,
        });
        break;
      case 'position-tasks':
        setExperienceInfo({
          ...experienceInfo,
          tasksName: e.target.value,
        });
        break;
      case 'position-start-date':
        setExperienceInfo({
          ...experienceInfo,
          startDate: e.target.value,
        });
        break;
      case 'position-end-date':
        setExperienceInfo({
          ...experienceInfo,
          endDate: e.target.value,
        });
        break;
      default:
        return;
    }
  };
  const submitFormData = (e) => {
    e.preventDefault();
    e.preventDefault();
    const formInputs = document.getElementById(e.target.id);
    let infoArray = [];
    for (let i = 0; i < formInputs.length; i++) {
      infoArray.push(formInputs[i].value);
    }
    infoArray.pop();
    if (
      infoArray.length !== formInputs.length - 1 ||
      infoArray.some((el) => el.trim() === '')
    ) {
      alert('Please complete each input.');
      return;
    }

    switch (e.target.id) {
      case 'general-info-form':
        setGeneralInfoSubmitted(!generalInfoSubmitted);
        break;
      case 'educational-info-form':
        setEducationalInfoSubmitted(!educationalInfoSubmitted);
        break;

      case 'experience-info-form':
        setExperienceInfoSubmitted(!experienceInfoSubmitted);
        break;
      default:
        return;
    }
  };

  const bringUpInputs = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case 'edit-general-info':
        setGeneralInfoSubmitted(!generalInfoSubmitted);
        break;
      case 'edit-educational-info':
        setEducationalInfoSubmitted(!educationalInfoSubmitted);
        break;

      case 'edit-experience-info':
        setExperienceInfoSubmitted(!experienceInfoSubmitted);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <div className="title">
        <span>REACT CV App</span>
        <a href="https://github.com/jegrieve">
          <img
            id="github-logo"
            src={logo}
            alt="github-logo"
            width="40"
            height="40"
          />
        </a>
      </div>
      <div className="container-fluid">
        <div className="cv-block rounded">
          <div className="general-info-block">
            {!generalInfoSubmitted ? (
              <form
                className=" form-row"
                onSubmit={submitFormData}
                id="general-info-form"
              >
                <div className="col-6">
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    onChange={updateInfo}
                    className="form-control"
                    id="first-name"
                    value={generalInfo['firstName']}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="last-name">Last Name:</label>
                  <input
                    onChange={updateInfo}
                    className="form-control"
                    id="last-name"
                    value={generalInfo['lastName']}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="email">Email:</label>
                  <input
                    onChange={updateInfo}
                    className="form-control"
                    id="email"
                    value={generalInfo['email']}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="phone-number">Phone Number:</label>
                  <input
                    onChange={updateInfo}
                    className="form-control"
                    id="phone-number"
                    value={generalInfo['phoneNumber']}
                  />
                </div>
                <div className="col-12 submit-info-btn">
                  <button className="btn btn-primary">Submit</button>
                </div>
                <div className="col-12">
                  <hr />
                </div>
              </form>
            ) : (
              <div>
                <div className="info-title">Personal Information</div>
                <GeneralInfo formInfo={Object.values(generalInfo)} />
                <div className="edit-btn">
                  <button
                    className="btn btn-warning"
                    id="edit-general-info"
                    onClick={bringUpInputs}
                  >
                    Edit
                  </button>
                </div>
                <hr />
              </div>
            )}
          </div>

          <div className="educational-info-block">
            {!educationalInfoSubmitted ? (
              <form
                className=" form-row"
                onSubmit={submitFormData}
                id="educational-info-form"
              >
                <div className="col-6">
                  <label htmlFor="school-name">School Name:</label>
                  <input
                    className="form-control"
                    onChange={updateInfo}
                    id="school-name"
                    value={educationalInfo['schoolName']}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="title-name">Title of Study:</label>
                  <input
                    className="form-control"
                    onChange={updateInfo}
                    id="title-name"
                    value={educationalInfo['titleName']}
                  />
                </div>
                <div className="col-6">
                  {' '}
                  <label htmlFor="school-date-name">Date of Completion:</label>
                  <input
                    className="form-control"
                    type="date"
                    onChange={updateInfo}
                    id="school-date-name"
                    value={educationalInfo['schoolDateName']}
                  />
                </div>
                <div className="col-12 submit-info-btn">
                  <button className="btn btn-primary">Submit</button>
                </div>
                <div className="col-12">
                  <hr />
                </div>
              </form>
            ) : (
              <div>
                <div className="info-title">Educational Information</div>
                <EducationalInfo formInfo={Object.values(educationalInfo)} />
                <div className="edit-btn">
                  <button
                    className="btn btn-warning"
                    id="edit-educational-info"
                    onClick={bringUpInputs}
                  >
                    Edit
                  </button>
                </div>

                <hr />
              </div>
            )}
          </div>
          <div className="experience-info-block">
            {!experienceInfoSubmitted ? (
              <form
                className="form-row"
                onSubmit={submitFormData}
                id="experience-info-form"
              >
                <div className="col-6">
                  <label htmlFor="company-name">Company Name:</label>
                  <input
                    className="form-control"
                    onChange={updateInfo}
                    id="company-name"
                    value={experienceInfo['companyName']}
                  />
                </div>
                <div className="col-6">
                  {' '}
                  <label htmlFor="position-name">Position at Company:</label>
                  <input
                    className="form-control"
                    onChange={updateInfo}
                    id="position-name"
                    value={experienceInfo['positionName']}
                  />
                </div>

                <div className="col-12">
                  {' '}
                  <label htmlFor="tasks-name">Tasks at Job:</label>
                  <input
                    className="form-control"
                    onChange={updateInfo}
                    id="position-tasks"
                    value={experienceInfo['tasksName']}
                  />
                </div>

                <div className="col-6">
                  {' '}
                  <label htmlFor="position-start-date">Start date:</label>
                  <input
                    className="form-control"
                    type="date"
                    onChange={updateInfo}
                    id="position-start-date"
                    value={experienceInfo['startDate']}
                  />
                </div>

                <div className="col-6">
                  {' '}
                  <label htmlFor="position-end-date">End date:</label>
                  <input
                    className="form-control"
                    type="date"
                    onChange={updateInfo}
                    id="position-end-date"
                    value={experienceInfo['endDate']}
                  />
                </div>

                <div className="col-12 submit-info-btn">
                  <button className="btn btn-primary ">Submit</button>
                </div>
              </form>
            ) : (
              <div>
                <div className="info-title">Experience Information</div>
                <ExperienceInfo formInfo={Object.values(experienceInfo)} />
                <div className="edit-btn">
                  <button
                    className="btn btn-warning"
                    id="edit-experience-info"
                    onClick={bringUpInputs}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
