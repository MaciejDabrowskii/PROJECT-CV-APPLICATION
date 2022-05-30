/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/general-info";
import Education from "./components/education";
import PrintSchools from "./components/show-schools";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      editMode: true,
      personalData: {
        name: "",
        email: "",
        phone: "",
        website: "",
        github: "",
        linkedin: "",
        schools: [],
        jobs: [],
      },
      education: {
        schoolName: "",
        subject: "",
        dateStart: "",
        dateEnd: "",
        id: uniqid(),
      },
      experience: {
        comapnyName: "",
        position: "",
        tasks: [],
        date: "",
      },
    };

    this.handleChange.bind(this);
    this.onSubmitSchool.bind(this);
    this.onDeleteSchool.bind(this);
  }

  handleChange = (e) =>
  {
    const { value, id, name } = e.target;
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        [id]: value,
      },
    }));
  };

  onSubmitSchool = (e) =>
  {
    e.preventDefault();
    if (Object.values(this.state.education)
      .every((el) => !el)) return;
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        schools: this.state.personalData.schools.concat(this.state.education),
      },
      education: {
        schoolName: "",
        subject: "",
        dateStart: "",
        dateEnd: "",
        id: uniqid(),
      },
    }));
  };

  onDeleteSchool = (e) =>
  {
    const { personalData } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        schools: personalData.schools.filter((school) => school.id !== e.target.parentElement.dataset.key),
      },
    }));
  };

  render()
  {
    const {
      editMode, personalData, education, experience,
    } = this.state;
    return (

      <div className="App">
        <h2>GENERAL INFO</h2>
        <GeneralInfo
          handleChange={this.handleChange}
          personalData={this.state}
        />
        <p>
          {personalData.name}
          {personalData.email}
          {personalData.phone}
          {personalData.github}
        </p>
        <h2>Education</h2>
        <div className="education">
          <PrintSchools
            personalData={personalData}
            onDeleteSchool={this.onDeleteSchool}
          />
          <Education
            handleChange={this.handleChange}
            onSubmitSchool={this.onSubmitSchool}
            education={education}
          />
        </div>
      </div>
    );
  }
}

export default App;
