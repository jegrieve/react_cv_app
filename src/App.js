import React, { Component } from 'react';
import './App.css';
import EducationalInfo from './components/educationalInfo';
import ExperienceInfo from './components/experience';
import GeneralInfo from './components/generalInfo';
import logo from './assets/github-icon.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: { firstName: '', lastName: '', email: '', phoneNumber: '' },
      generalInfoSubmitted: false,
      educationalInfo: { schoolName: '', titleName: '', schoolDateName: '' },
      educationalInfoSubmitted: false,
      experienceInfo: {
        companyName: '',
        positionName: '',
        tasksName: '',
        startDate: '',
        endDate: '',
      },
      experienceInfoSubmitted: false,
    };
  }

  updateInfo = (e) => {
    let stateCopy = JSON.parse(JSON.stringify(this.state));

    this.setState(function (state) {
      switch (e.target.id) {
        case 'first-name':
          stateCopy.generalInfo['firstName'] = e.target.value;
          return stateCopy;
        case 'last-name':
          stateCopy.generalInfo['lastName'] = e.target.value;
          return stateCopy;
        case 'email':
          stateCopy.generalInfo['email'] = e.target.value;
          return stateCopy;
        case 'phone-number':
          stateCopy.generalInfo['phoneNumber'] = e.target.value;
          return stateCopy;
        case 'school-name':
          stateCopy.educationalInfo['schoolName'] = e.target.value;
          return stateCopy;
        case 'title-name':
          stateCopy.educationalInfo['titleName'] = e.target.value;
          return stateCopy;
        case 'school-date-name':
          stateCopy.educationalInfo['schoolDateName'] = e.target.value;
          return stateCopy;
        case 'company-name':
          stateCopy.experienceInfo['companyName'] = e.target.value;
          return stateCopy;
        case 'position-name':
          stateCopy.experienceInfo['positionName'] = e.target.value;
          return stateCopy;
        case 'position-tasks':
          stateCopy.experienceInfo['tasksName'] = e.target.value;
          return stateCopy;
        case 'position-start-date':
          stateCopy.experienceInfo['startDate'] = e.target.value;
          return stateCopy;
        case 'position-end-date':
          stateCopy.experienceInfo['endDate'] = e.target.value;
          return stateCopy;
        default:
          return;
      }
    });
  };

  submitFormData = (e) => {
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
    this.setState(function (state) {
      let stateCopy = JSON.parse(JSON.stringify(this.state));
      switch (e.target.id) {
        case 'general-info-form':
          stateCopy['generalInfoSubmitted'] = !stateCopy[
            'generalInfoSubmitted'
          ];
          return stateCopy;
        case 'educational-info-form':
          stateCopy['educationalInfoSubmitted'] = !stateCopy[
            'educationalInfoSubmitted'
          ];
          return stateCopy;
        case 'experience-info-form':
          stateCopy['experienceInfoSubmitted'] = !stateCopy[
            'experienceInfoSubmitted'
          ];
          return stateCopy;
        default:
          return;
      }
    });
  };

  bringUpInputs = (e) => {
    e.preventDefault();
    this.setState(function (state) {
      let stateCopy = JSON.parse(JSON.stringify(this.state));
      switch (e.target.id) {
        case 'edit-general-info':
          stateCopy['generalInfoSubmitted'] = !stateCopy[
            'generalInfoSubmitted'
          ];
          return stateCopy;
        case 'edit-educational-info':
          stateCopy['educationalInfoSubmitted'] = !stateCopy[
            'educationalInfoSubmitted'
          ];
          return stateCopy;
        case 'edit-experience-info':
          stateCopy['experienceInfoSubmitted'] = !stateCopy[
            'experienceInfoSubmitted'
          ];
          return stateCopy;
        default:
          return;
      }
    });
  };

  render() {
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
              {!this.state.generalInfoSubmitted ? (
                <form
                  className=" form-row"
                  onSubmit={this.submitFormData}
                  id="general-info-form"
                >
                  <div className="col-6">
                    <label htmlFor="first-name">First Name:</label>
                    <input
                      onChange={this.updateInfo}
                      className="form-control"
                      id="first-name"
                      value={this.state['generalInfo']['firstName']}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                      onChange={this.updateInfo}
                      className="form-control"
                      id="last-name"
                      value={this.state['generalInfo']['lastName']}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email">Email:</label>
                    <input
                      onChange={this.updateInfo}
                      className="form-control"
                      id="email"
                      value={this.state['generalInfo']['email']}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input
                      onChange={this.updateInfo}
                      className="form-control"
                      id="phone-number"
                      value={this.state['generalInfo']['phoneNumber']}
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
                  <GeneralInfo
                    formInfo={Object.values(this.state.generalInfo)}
                  />
                  <div className="edit-btn">
                    <button
                      className="btn btn-warning"
                      id="edit-general-info"
                      onClick={this.bringUpInputs}
                    >
                      Edit
                    </button>
                  </div>
                  <hr />
                </div>
              )}
            </div>

            <div className="educational-info-block">
              {!this.state.educationalInfoSubmitted ? (
                <form
                  className=" form-row"
                  onSubmit={this.submitFormData}
                  id="educational-info-form"
                >
                  <div className="col-6">
                    <label htmlFor="school-name">School Name:</label>
                    <input
                      className="form-control"
                      onChange={this.updateInfo}
                      id="school-name"
                      value={this.state['educationalInfo']['schoolName']}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="title-name">Title of Study:</label>
                    <input
                      className="form-control"
                      onChange={this.updateInfo}
                      id="title-name"
                      value={this.state['educationalInfo']['titleName']}
                    />
                  </div>
                  <div className="col-6">
                    {' '}
                    <label htmlFor="school-date-name">
                      Date of Completion:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      onChange={this.updateInfo}
                      id="school-date-name"
                      value={this.state['educationalInfo']['schoolDateName']}
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
                  <EducationalInfo
                    formInfo={Object.values(this.state.educationalInfo)}
                  />
                  <div className="edit-btn">
                    <button
                      className="btn btn-warning"
                      id="edit-educational-info"
                      onClick={this.bringUpInputs}
                    >
                      Edit
                    </button>
                  </div>

                  <hr />
                </div>
              )}
            </div>
            <div className="experience-info-block">
              {!this.state.experienceInfoSubmitted ? (
                <form
                  className="form-row"
                  onSubmit={this.submitFormData}
                  id="experience-info-form"
                >
                  <div className="col-6">
                    <label htmlFor="company-name">Company Name:</label>
                    <input
                      className="form-control"
                      onChange={this.updateInfo}
                      id="company-name"
                      value={this.state['experienceInfo']['companyName']}
                    />
                  </div>
                  <div className="col-6">
                    {' '}
                    <label htmlFor="position-name">Position at Company:</label>
                    <input
                      className="form-control"
                      onChange={this.updateInfo}
                      id="position-name"
                      value={this.state['experienceInfo']['positionName']}
                    />
                  </div>

                  <div className="col-12">
                    {' '}
                    <label htmlFor="tasks-name">Tasks at Job:</label>
                    <input
                      className="form-control"
                      onChange={this.updateInfo}
                      id="position-tasks"
                      value={this.state['experienceInfo']['tasksName']}
                    />
                  </div>

                  <div className="col-6">
                    {' '}
                    <label htmlFor="position-start-date">Start date:</label>
                    <input
                      className="form-control"
                      type="date"
                      onChange={this.updateInfo}
                      id="position-start-date"
                      value={this.state['experienceInfo']['startDate']}
                    />
                  </div>

                  <div className="col-6">
                    {' '}
                    <label htmlFor="position-end-date">End date:</label>
                    <input
                      className="form-control"
                      type="date"
                      onChange={this.updateInfo}
                      id="position-end-date"
                      value={this.state['experienceInfo']['endDate']}
                    />
                  </div>

                  <div className="col-12 submit-info-btn">
                    <button className="btn btn-primary ">Submit</button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="info-title">Experience Information</div>
                  <ExperienceInfo
                    formInfo={Object.values(this.state.experienceInfo)}
                  />
                  <div className="edit-btn">
                    <button
                      className="btn btn-warning"
                      id="edit-experience-info"
                      onClick={this.bringUpInputs}
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
  }
}

export default App;
