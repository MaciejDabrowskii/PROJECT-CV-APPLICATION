/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function ShowJobs(props)
{
  const {
    inEditMode, personalData, onDelete, onEdit,
  } = props;
  return (
    <ul
      className="jobs-list"
    >
      {personalData.jobs
        .sort((a, b) => b.jobStart - a.jobStart)
        .map((job) => (
          <li
            key={job.id}
            data-key={job.id}
          >
            <div
              className="job"
            >
              <p
                className="job-date"
              >
                {job.jobStart}
                {" "}
                -
                {" "}
                {job.jobEnd}
              </p>
              <p
                className="job-position"
              >
                {job.position}
              </p>
              <p
                className="job-comapny"
              >
                {job.comapnyName}
              </p>
              <p
                className="job-decription"
              />

              {job.description}
            </div>
            {inEditMode
              && (
                <div
                  data-key={job.id}
                  className="button-container"
                >
                  <button
                    type="button"
                    name="jobs"
                    onClick={onDelete}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    name="jobs"
                    data-key="experience"
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
export default ShowJobs;
