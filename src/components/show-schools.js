/* eslint-disable react/prop-types */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function ShowSchools(props)
{
  const {
    inEditMode, personalData, onDelete, onEdit,
  } = props;
  return (
    <ul>
      {personalData.schools
        .sort((a, b) => b.dateStart - a.dateStart)
        .map((school) => (
          <li
            key={school.id}
            data-key={school.id}
            className="schools-list"
          >
            <div
              className="school"
            >
              <p
                className="school-name"
              >
                {school.schoolName}
              </p>
              <p
                className="school-date"
              >
                {school.dateStart}
                {" "}
                -
                {" "}
                {school.dateEnd}
              </p>
              <p
                className="school-subject"
              >
                {school.subject}
              </p>
              {" "}
            </div>
            {inEditMode
              && (
              <div
                data-key={school.id}
                className="button-container"
                name="schools"
              >
                <button
                  type="button"
                  name="schools"
                  onClick={onDelete}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fa-solid"
                  />
                </button>
                <button
                  type="button"
                  name="schools"
                  data-key="education"
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
export default ShowSchools;
