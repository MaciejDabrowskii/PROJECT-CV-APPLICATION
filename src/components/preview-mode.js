/* eslint-disable react/prop-types */

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
        <h1 className="header preview-header">Curriculum Vitae</h1>
        <div className="personal-info preview-personal-info">
          <div
            className="preview-profile-img-container"
          >
            <img
              className="profile-img preview-profile-img"
              alt="profile"
              src={personalData.profileImg}
            />
          </div>
          <div className="preview-personal-info-data">
            <h2 className="preview-name">
              {personalData.name}
            </h2>
            <p className="preview-birth">
              Birth date:
              {" "}
              {personalData.birth}
            </p>
            <p className="preview-phone">
              Phone number:
              {" "}
              {personalData.phone}
            </p>
            <p className="preview-email">
              Email:
              {" "}
              {personalData.email}
            </p>
            {personalData.website !== ""
              && (
              <p className="preview-website">
                Website:
                {" "}
                <a href={personalData.website}>{personalData.website}</a>
              </p>
              )}
            {personalData.github !== ""
              && (
              <p className="preview-github">
                Github:
                {" "}
                <a href={personalData.github}>{personalData.github}</a>
              </p>
              )}
            {personalData.linkedin !== ""
              && (
              <p className="preview-linkedin">
                Linkedin:
                {" "}
                <a href={personalData.linkedin}>{personalData.linkedin}</a>
              </p>
              )}
          </div>

        </div>
        <div className="education education-preview">
          <h2>Education:</h2>
          <ShowSchools
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <div className="experience experience-preview">
          <h2>Experience:</h2>
          <ShowJobs
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <div className="languages languages-preview">
          <h2>Languages:</h2>
          <ShowLanguages
            personalData={personalData}
            onDelete={onDelete}
            onEdit={onEdit}
            inEditMode={editMode}
          />
        </div>
        <div className="skills skills-preview">
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
