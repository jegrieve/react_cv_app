import React, { Component } from 'react';
import './App.css';
import EducationalInfo from './components/educationalInfo';
import ExperienceInfo from './components/experience';
import GeneralInfo from './components/generalInfo';
//import Overview from "./components/Overview"

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: [],
      experienceInfo: [],
      educationalInfo: [],
      generalInfoForm: true,
      experienceInfoForm: true,
      educationalInfoForm: true,
    };
  }

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
      switch (e.target.id) {
        case 'general-info-form':
          return {
            generalInfo: infoArray,
            experienceInfo: state.experienceInfo,
            educationalInfo: state.educationalInfo,
            generalInfoForm: false,
            experienceInfoForm: state.experienceInfoForm,
            educationalInfoForm: state.educationalInfoForm,
          };
        case 'educational-info-form':
          return {
            generalInfo: state.generalInfo,
            experienceInfo: infoArray,
            educationalInfo: state.educationalInfo,
            generalInfoForm: state.generalInfoForm,
            experienceInfoForm: state.experienceInfoForm,
            educationalInfoForm: false,
          };
        case 'experience-info-form':
          return {
            generalInfo: state.generalInfo,
            experienceInfo: state.experienceInfo,
            educationalInfo: infoArray,
            generalInfoForm: state.generalInfoForm,
            experienceInfoForm: false,
            educationalInfoForm: state.educationalInfoForm,
          };
        default:
          return;
      }
    });
  };

  render() {
    return (
      <div>
        <div className="title">REACT CV App</div>
        <div className="container">
          <div className="cv-block">
            {this.state.generalInfoForm ? (
              <div className="generalInfo-block">
                <form onSubmit={this.submitFormData} id="general-info-form">
                  <label htmlFor="first-name">First Name:</label>
                  <input id="first-name" />
                  <label htmlFor="last-name">Last Name:</label>
                  <input id="last-name" />
                  <label htmlFor="email">Email:</label>
                  <input id="email" />
                  <label htmlFor="phone-number">Phone Number:</label>
                  <input id="phone-number" />
                  <button>Submit</button>
                </form>
                <hr />
              </div>
            ) : (
              <div>
                <GeneralInfo formInfo={this.state.generalInfo} />
                <button>Edit</button>
                <hr />
              </div>
            )}
            <div className="educationalInfo-block">
              <EducationalInfo />
            </div>
            <div className="experience-block">{<ExperienceInfo />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
