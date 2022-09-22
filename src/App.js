/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from "react";
import "./style.css";
import uniqid from "uniqid";
import DisplayPreview from "./components/preview-mode";
import DisplayEdit from "./components/edit-mode";
import DisplayHeader from "./components/header";
import DisplayFooter from "./components/footer";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      editMode: true,
      modeText: "Preview",
      personalData: {
        profileImg: "https://i.pinimg.com/564x/05/01/95/050195e6a48d609d5e8bbf8392a181b6.jpg",
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
    this.onChange = this.onChange.bind(this);
    this.setSelectValue = this.setSelectValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onPaste = this.onPaste.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onChangeMode = this.onChangeMode.bind(this);
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

  setSelectValue = (value) =>
  {
    this.setState((prevState) => ({
      language: {
        ...prevState.language,
        proficiency: value.value,
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

  onPaste = (e) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        profileImg: e.clipboardData.getData("Text"),

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
        <DisplayHeader
          onChangeMode={this.onChangeMode}
          modeText={modeText}
        />
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
          onPaste={this.onPaste}
          setSelectValue={this.setSelectValue}
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
        <DisplayFooter />
      </div>
    );
  }
}
export default App;
