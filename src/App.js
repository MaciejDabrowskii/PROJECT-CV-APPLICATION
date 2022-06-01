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
import Languages from "./components/languages";
import Skills from "./components/skills";
import ShowSchools from "./components/show-schools";
import ShowSkills from "./components/show-skills";
import ShowJobs from "./components/show-jobs";
import ShowLanguages from "./components/show-languages";

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
        proficiency: "" || "Elementary",
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
    const { key } = e.target.dataset;
    const emptyState = {};
    const keys = Object.keys(this.state[name]);
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        [key]: this.state.personalData[key]
          .filter((el) => el.id !== this.state[name].id)
          .concat(this.state[name]),
      },
    }));
    keys.forEach((el) => (
      el === "id" ? emptyState[el] = uniqid()
        : el === "proficiency" ? emptyState[el] = "Elementary"
          : emptyState[el] = ""
    ));
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
        [name]: personalData[name]
          .filter((el) => el.id !== e.target.parentElement.dataset.key),
      },
    }));
  };

  onEdit = (e) =>
  {
    const { personalData } = this.state;
    const { name } = e.target;
    const { key } = e.target.dataset;
    const element = personalData[name]
      .filter((el) => el.id === e.target.parentElement.dataset.key);
    this.setState({
      [key]: element[0],
    });
  };

  render()
  {
    const {
      editMode,
      personalData,
      education,
      experience,
      language,
      skill,
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
            onEdit={this.onEdit}
          />
        </div>
        <h2>Experience</h2>
        <Experience
          experience={experience}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <ShowJobs
          personalData={personalData}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
        <h2>Languages</h2>
        <Languages
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          language={language}
        />
        <ShowLanguages
          personalData={personalData}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
        <h2>Skills</h2>
        <Skills
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          skill={skill.type}
        />
        <ShowSkills
          personalData={personalData}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
      </div>
    );
  }
}
export default App;
