/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./style.css";
import uniqid from "uniqid";
import DisplayPreview from "./components/preview-mode";
import DisplayEdit from "./components/edit-mode";
import DisplayHeader from "./components/header";
import DisplayFooter from "./components/footer";

function App()
{
  const [editMode, setEditMode] = useState(true);
  const [modeText, setModeText] = useState("Preview");
  const [personalData, setPersonalData] = useState({
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
  });

  const [education, setEducation] = useState({
    schoolName: "",
    subject: "",
    dateStart: "",
    dateEnd: "",
    id: uniqid(),
  });
  const [experience, setExperience] = useState({
    comapnyName: "",
    position: "",
    description: "",
    jobStart: "",
    jobEnd: "",
    id: uniqid(),
  });
  const [skill, setSkill] = useState({
    type: "",
    id: uniqid(),
  });
  const [language, setLanguage] = useState({
    languageName: "",
    proficiency: "" || "Elementary",
    id: uniqid(),
  });

  const onChange = (e) =>
  {
    const { value, id, name } = e.target;

    switch (name)
    {
      case "personalData":
        setPersonalData({
          ...personalData,

          [id]: value,

        });

        break;
      case "education":
        setEducation({
          ...education,

          [id]: value,

        });
        break;
      case "experience":
        setExperience({
          ...experience,

          [id]: value,

        });

        break;
      case "skill":
        setSkill({
          ...skill,

          [id]: value,

        });

        break;
      case "language":
        setLanguage({
          ...language,

          [id]: value,

        });

        break;
      default:
    }
  };

  const setSelectValue = (value) =>
  {
    setLanguage({
      ...language,
      proficiency: value.value,
    });
  };

  const onSubmit = (e) =>
  {
    e.preventDefault();
    const { name } = e.target;
    const { key } = e.target.dataset;
    const emptyState = {};

    const state = () =>
    {
      switch (name)
      {
        case "personalData":
          return personalData;

        case "education":
          return education;

        case "experience":
          return experience;

        case "skill":
          return skill;

        case "language":
          return language;

        default:
      }
    };
    const keys = Object.keys(state());
    console.log(state());

    setPersonalData({

      ...personalData,
      [key]: personalData[key]
        .filter((el) => el.id !== state().id)
        .concat(state()),

    });

    keys.forEach((el) => (
      el === "id" ? emptyState[el] = uniqid()
        : el === "proficiency" ? emptyState[el] = "Elementary"
          : emptyState[el] = ""
    ));

    switch (name)
    {
      case "education":
        setEducation({
          ...emptyState,
        });

        break;
      case "experience":
        setExperience({
          ...emptyState,
        });

        break;
      case "skill":
        setSkill({
          ...emptyState,
        });

        break;
      case "language":
        setLanguage({
          ...emptyState,
        });

        break;
      default:
    }
  };

  const onDelete = (e) =>
  {
    const { name } = e.target;
    setPersonalData({

      ...personalData,
      [name]: personalData[name]
        .filter((el) => el.id !== e.target.parentElement.dataset.key),
    });
  };

  const onPaste = (e) =>
  {
    setPersonalData({
      ...personalData,
      profileImg: e.clipboardData.getData("Text"),

    });
  };

  const onEdit = (e) =>
  {
    const { name } = e.target;
    const { key } = e.target.dataset;
    const element = personalData[name]
      .filter((el) => el.id === e.target.parentElement.dataset.key);

    switch (key)
    {
      case "education":
        setEducation({
          ...element[0],
        });

        break;
      case "experience":
        setExperience({
          ...element[0],
        });

        break;
      case "skill":
        setSkill({
          ...element[0],
        });

        break;
      case "language":
        setLanguage({
          ...element[0],
        });

        break;
      default:
    }
  };

  const onChangeMode = () =>
  {
    setEditMode(
      (current) => !current,
    );
    switch ({ editMode })
    {
      case true: setModeText("Edit");
        break;
      case false: setModeText("Preview");
        break;
      default:
    }
  };

  return (
    <div className="App">
      <DisplayHeader
        onChangeMode={onChangeMode}
        modeText={modeText}
      />
      {/* Display when in edit mode */}
      {editMode
        && (
        <DisplayEdit
          personalData={personalData}
          editMode={editMode}
          education={education}
          experience={experience}
          language={language}
          skill={skill}
          onDelete={onDelete}
          onEdit={onEdit}
          onChange={onChange}
          onSubmit={onSubmit}
          onPaste={onPaste}
          setSelectValue={setSelectValue}
        />
        )}
      {/* Display when NOT in edit mode */}
      {!editMode
        && (

        <DisplayPreview
          personalData={personalData}
          editMode={editMode}
          onDelete={onDelete}
          onEdit={onEdit}
        />
        )}
      <DisplayFooter />
    </div>
  );
}

export default App;
