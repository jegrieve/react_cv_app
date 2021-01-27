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
    };
  }

  // click submit then u iterate through all inputs, colecting the values,
  // then u
  // update this app with the values. then u run another function here
  // that will then  go thrpughh each dom element and make it a p
  // also renders a edit btn

  // submitGeneralInfo = (e) => {
  //   e.preventDefault();
  //   this.setState = {
  //     generalInfo:
  //     experienceInfo: this.state.experienceInfo,
  //     educationalInfo: this.state.educationalInfo
  //   }
  // };

  render() {
    return (
      <div>
        <div className="title">REACT CV App</div>
        <div className="container">
          <div className="cv-block">
            <div className="generalInfo-block">{<GeneralInfo />}</div>
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
