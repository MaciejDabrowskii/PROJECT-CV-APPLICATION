/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
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
import Languages from "./components/languages";

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
        skills: [],
        languages: [],
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
      skill: {
        type: "",
        id: uniqid(),
      },
      language: {
        languageName: "",
        proficiency: "",
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

  onSubmit = (e) =>
  {
    e.preventDefault();
    const { name } = e.target;
    let key = "";

    switch (name)
    {
      case "experience":
        key = "jobs";
        break;
      case "education":
        key = "schools";
        break;
      case "language":
        key = "languages";
        break;
      case "skill":
        key = "skills";
        break;
      default:
    }

    const emptyState = {};
    const keys = Object.keys(this.state[name]);
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        [key]: this.state.personalData[key].concat(this.state[name]),
      },
    }));

    keys.forEach((el) => (el === "id" ? emptyState[el] = uniqid() : emptyState[el] = ""));
    this.setState((prevState) => ({
      ...prevState,
      [name]: emptyState,
    }));
  };

  onDelete = (e) =>
  {
    const { personalData } = this.state;
    const { name } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        [name]: personalData[name].filter((el) => el.id !== e.target.parentElement.dataset.key),
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
        <h2>Education</h2>
        <div className="education">
          <Education
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
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
          onSubmit={this.onSubmit}
        />
        <ShowJobs personalData={personalData} onDelete={this.onDelete} />
        <div>
          <Languages />
        </div>
      </div>
    );
  }
}
export default App;
