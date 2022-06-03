/* eslint-disable react/prop-types */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function ShowSkills(props)
{
  const {
    inEditMode, personalData, onDelete, onEdit,
  } = props;
  return (
    <ul
      className="skills-list fa-ul"
    >
      {personalData.skills.map((skill) => (
        <li
          key={skill.id}
          data-key={skill.id}
        >
          <span className="fa-li">
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="fa-regular fa-square"
            />
          </span>
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
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fa-solid"
                  />
                </button>
                <button
                  type="button"
                  name="skills"
                  data-key="skill"
                  onClick={onEdit}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="fa-solid"
                  />
                </button>
              </div>
              )}
        </li>
      ))}
    </ul>
  );
}
export default ShowSkills;
