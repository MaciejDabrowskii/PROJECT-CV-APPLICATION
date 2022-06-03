/* eslint-disable react/prop-types */

import React, { Component } from "react";
import ShowSchools from "./show-schools";
import ShowSkills from "./show-skills";
import ShowJobs from "./show-jobs";
import ShowLanguages from "./show-languages";
import GeneralInfo from "./edit-mode-general-info";
import Education from "./edit-mode-education";
import Experience from "./edit-mode-experience";
import Languages from "./edit-mode-languages";
import Skills from "./edit-mode-skills";

class DisplayEdit extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      personalData,
      editMode,
      education,
      experience,
      language,
      skill,
      onDelete,
      onEdit,
      onChange,
      onSubmit,
      onPaste,
    } = this.props;

    return (
      <div className="edit-mode">
        <h2>GENERAL INFO</h2>

        <GeneralInfo
          handleChange={onChange}
          personalData={personalData}
          onPaste={onPaste}
        />
        <h2>EDUCATION</h2>
        <div className="education">
          <Education
            handleChange={onChange}
            onSubmit={onSubmit}
            education={education}
          />
          <ShowSchools
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <h2>EXPERIENCE</h2>
        <Experience
          experience={experience}
          handleChange={onChange}
          onSubmit={onSubmit}
        />
        <ShowJobs
          personalData={personalData}
          onDelete={onDelete}
          onEdit={onEdit}
          inEditMode={editMode}
        />
        <h2>LANGUAGES</h2>
        <Languages
          onSubmit={onSubmit}
          handleChange={onChange}
          language={language}
        />
        <ShowLanguages
          personalData={personalData}
          onDelete={onDelete}
          onEdit={onEdit}
          inEditMode={editMode}
        />
        <h2>SKILLS</h2>
        <Skills
          onSubmit={onSubmit}
          handleChange={onChange}
          skill={skill.type}
        />
        <ShowSkills
          personalData={personalData}
          onDelete={onDelete}
          onEdit={onEdit}
          inEditMode={editMode}
        />

      </div>
    );
  }
}

export default DisplayEdit;
