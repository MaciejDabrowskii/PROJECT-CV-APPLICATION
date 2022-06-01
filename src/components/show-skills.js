/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowSkills(props)
{
  const { personalData, onDelete } = props;
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
          <button
            type="button"
            name="skills"
            onClick={onDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ShowSkills;
