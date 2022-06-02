/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowSkills(props)
{
  const {
    inEditMode, personalData, onDelete, onEdit,
  } = props;
  return (
    <ul>
      {personalData.skills.map((skill) => (
        <li key={skill.id} data-key={skill.id}>
          <div
            className="skill"
          >
            <p
              className="skill-type"
            >
              {skill.type}
            </p>
          </div>
          {inEditMode
              && (
              <div
                data-key={skill.id}
                className="button-container"
              >
                <button
                  type="button"
                  name="skills"
                  onClick={onDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  name="skills"
                  data-key="skill"
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
export default ShowSkills;
