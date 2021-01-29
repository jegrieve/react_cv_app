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
      generalInfo: { firstName: '', lastName: '', email: '', phoneNumber: '' },
      generalInfoSubmitted: false,
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
            <div className="general-info-block">
              {!this.state.generalInfoSubmitted ? (
                <form onSubmit={this.submitFormData} id="general-info-form">
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    onChange={this.updateInfo}
                    id="first-name"
                    value={this.state['generalInfo']['firstName']}
                  />
                  <label htmlFor="last-name">Last Name:</label>
                  <input
                    onChange={this.updateInfo}
                    id="last-name"
                    value={this.state['generalInfo']['lastName']}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    onChange={this.updateInfo}
                    id="email"
                    value={this.state['generalInfo']['email']}
                  />
                  <label htmlFor="phone-number">Phone Number:</label>
                  <input
                    onChange={this.updateInfo}
                    id="phone-number"
                    value={this.state['generalInfo']['phoneNumber']}
                  />
                  <button>Submit</button>
                  <hr />
                </form>
              ) : (
                <div>
                  <GeneralInfo
                    formInfo={Object.values(this.state.generalInfo)}
                  />
                  <button id="edit-general-info" onClick={this.bringUpInputs}>
                    Edit
                  </button>
                  <hr />
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
