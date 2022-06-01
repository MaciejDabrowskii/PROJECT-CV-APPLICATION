/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

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
          <li key={school.id} data-key={school.id}>
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
              <div data-key={school.id}>
                <button
                  type="button"
                  name="schools"
                  onClick={onDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  name="schools"
                  data-key="education"
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
export default ShowSchools;
