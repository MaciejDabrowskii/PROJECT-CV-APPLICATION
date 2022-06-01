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
      editMode: false,
      personalData: {
        name: "",
        birth: "",
        phone: "",
        email: "",
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

  onChangeMode = () =>
  {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
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
        <button
          type="button"
          onClick={this.onChangeMode}
        >
          Change mode

        </button>
        {/* Display when in edit mode */}
        {this.state.editMode
        && (
          <div className="edit-mode">
            <h2>GENERAL INFO</h2>
            <GeneralInfo
              handleChange={this.handleChange}
              personalData={personalData}
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
                inEditMode={editMode}
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
              inEditMode={editMode}
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
              inEditMode={editMode}
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
              inEditMode={editMode}
            />
          </div>
        )}
        {/* Display when NOT in edit mode */}
        {!this.state.editMode
        && (
          <div className="preview-mode">
            <h1 className="header">Curriculum Vitae</h1>
            <div className="personal-info">
              <h3 className="name">
                {personalData.name}
              </h3>
              <p className="birth">
                Birth date:
                {" "}
                {personalData.phone}
              </p>
              <p className="phone">
                Phone number:
                {" "}
                {personalData.phone}
              </p>
              <p className="email">
                Email:
                {" "}
                {personalData.phone}
              </p>
              {personalData.website !== ""
              && (
              <p className="website">
                Website:
                {" "}
                <a href={personalData.website}>{personalData.website}</a>
              </p>
              )}
              {personalData.github !== ""
              && (
              <p className="github">
                Github:
                {" "}
                <a href={personalData.github}>{personalData.github}</a>
              </p>
              )}
              {personalData.linkedin !== ""
              && (
              <p className="linkedin">
                Linkedin:
                {" "}
                <a href={personalData.linkedin}>{personalData.linkedin}</a>
              </p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
