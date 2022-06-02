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
import GeneralInfo from "./components/edit-mode-general-info";
import Education from "./components/edit-mode-education";
import Experience from "./components/edit-mode-experience";
import Languages from "./components/edit-mode-languages";
import Skills from "./components/edit-mode-skills";
import ShowSchools from "./components/show-schools";
import ShowSkills from "./components/show-skills";
import ShowJobs from "./components/show-jobs";
import ShowLanguages from "./components/show-languages";
import DisplayPreview from "./components/preview-mode-display";
import DisplayEdit from "./components/edit-mode-display";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      editMode: true,
      modeText: "Preview",

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

  onChange = (e) =>
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
    switch (this.state.editMode)
    {
      case true: this.setState({ modeText: "Edit" });
        break;
      case false: this.setState({ modeText: "Preview" });
        break;
      default:
    }
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
      modeText,
    } = this.state;
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.onChangeMode}
        >
          {modeText}
        </button>
        {/* Display when in edit mode */}
        {this.state.editMode
        && (
        <DisplayEdit
          personalData={personalData}
          editMode={editMode}
          education={education}
          experience={experience}
          language={language}
          skill={skill}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        )}
        {/* Display when NOT in edit mode */}
        {!this.state.editMode
        && (

        <DisplayPreview
          personalData={personalData}
          editMode={editMode}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
        )}
      </div>
    );
  }
}
export default App;
