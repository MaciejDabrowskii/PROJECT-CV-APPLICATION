/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import ShowSchools from "./show-schools";
import ShowSkills from "./show-skills";
import ShowJobs from "./show-jobs";
import ShowLanguages from "./show-languages";

class DisplayPreview extends Component
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
      onDelete,
      onEdit,
    } = this.props;

    return (
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
        <div className="education">
          <h2>Education:</h2>
          <ShowSchools
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <div className="experience">
          <h2>Experience:</h2>
          <ShowJobs
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <div className="languages">
          <h2>Languages:</h2>
          <ShowLanguages
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <div className="skills">
          <h2>Skills:</h2>
          <ShowSkills
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
      </div>
    );
  }
}

export default DisplayPreview;
