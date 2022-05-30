/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowJobs(props)
{
  const { personalData, onDelete } = props;
  return (
    <ul>
      {personalData.jobs.map((job) => (
        <li key={job.id} data-key={job.id}>
          {job.comapnyName}
          {" "}
          {job.position}
          {" "}
          {job.description}
          {" "}
          {job.jobStart}
          {" "}
          -
          {" "}
          {job.jobEnd}
          <button
            type="button"
            onClick={(e) => onDelete(e, "jobs")}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ShowJobs;
