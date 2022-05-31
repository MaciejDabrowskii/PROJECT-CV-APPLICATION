/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowJobs(props)
{
  const { personalData, onDelete } = props;
  return (
    <ul>
      {personalData.jobs
        .sort((a, b) => b.jobStart - a.jobStart)
        .map((job) => (
          <li key={job.id} data-key={job.id}>
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
            <button
              type="button"
              name="jobs"
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ShowJobs;
