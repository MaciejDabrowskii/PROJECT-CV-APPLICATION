/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowLanguages(props)
{
  const {
    inEditMode, personalData, onDelete, onEdit,
  } = props;
  return (
    <ul>
      {personalData.languages.map((language) => (
        <li key={language.id} data-key={language.id}>
          <div
            className="language"
          >
            <p
              className="language-name"
            >
              {language.languageName}
            </p>
            <p
              className="language-proficiency"
            >
              {language.proficiency}
            </p>
          </div>
          {inEditMode
              && (
              <div
                data-key={language.id}
                className="button-container"
              >
                <button
                  type="button"
                  name="languages"
                  onClick={onDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  name="languages"
                  data-key="language"
                  onClick={onEdit}
                >
                  Edit
                </button>
              </div>
              )}
        </li>
      ))}
    </ul>
  );
}
export default ShowLanguages;
