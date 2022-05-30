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
import Experience from "./components/experience";
import ShowSchools from "./components/show-schools";
import ShowJobs from "./components/show-jobs";

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
        description: "",
        jobStart: "",
        jobEnd: "",
        id: uniqid(),
      },
    };
    // this.handleChange.bind(this);
    // this.onSubmitSchool.bind(this);
    // this.onDeleteSchool.bind(this);
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

  onSubmitExperience = (e) =>
  {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        jobs: this.state.personalData.jobs.concat(this.state.experience),
      },
      experience: {
        comapnyName: "",
        position: "",
        description: "",
        jobStart: "",
        jobEnd: "",
        id: uniqid(),
      },
    }));
    console.log(this.state.personalData.jobs.length);
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

  onDelete = (e, key) =>
  {
    const { personalData } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        [key]: personalData[key].filter((el) => el.id !== e.target.parentElement.dataset.key),
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
          <Education
            handleChange={this.handleChange}
            onSubmitSchool={this.onSubmitSchool}
            education={education}
          />
          <ShowSchools
            personalData={personalData}
            onDelete={this.onDelete}
          />
        </div>
        <h2>Experience</h2>
        <Experience
          experience={experience}
          handleChange={this.handleChange}
          onSubmitExperience={this.onSubmitExperience}
        />
        <ShowJobs personalData={personalData} onDelete={this.onDelete} />
      </div>
    );
  }
}
export default App;
