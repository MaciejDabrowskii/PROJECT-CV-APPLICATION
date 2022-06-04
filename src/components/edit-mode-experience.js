/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      handleChange,
      onSubmit,
      experience,
    } = this.props;
    return (
      <div className="experience-input-container">
        <form
          className="experience-form"
        >
          <label htmlFor="comapnyName">
            Company Name:
            <input
              name="experience"
              id="comapnyName"
              type="text"
              minLength="2"
              placeholder="Company Name"
              onChange={handleChange}
              value={experience.comapnyName}
            />
          </label>
          <label htmlFor="position">
            Position:
            <input
              name="experience"
              id="position"
              type="text"
              minLength="2"
              placeholder="Frontend Developer"
              onChange={handleChange}
              value={experience.position}
            />

          </label>
          <label htmlFor="jobStart">
            Start Year:
            <input
              name="experience"
              id="jobStart"
              type="text"
              minLength="4"
              maxLength="4"
              onChange={handleChange}
              value={experience.jobStart}
            />
          </label>
          <label htmlFor="jobEnd">
            End Year:
            <input
              name="experience"
              id="jobEnd"
              type="text"
              minLength="4"
              maxLength="4"
              onChange={handleChange}
              value={experience.jobEnd}
            />
          </label>
          <label htmlFor="description">
            Job description:
            <textarea
              name="experience"
              id="description"
              rows="4"
              cols="40"
              onChange={handleChange}
              value={experience.description}
            />
          </label>
          <button
            name="experience"
            className="submit-experience-btn submit-btn"
            type="button"
            data-key="jobs"
            onClick={onSubmit}
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="fa-solid"
            />
          </button>
        </form>
      </div>
    );
  }
}

export default Experience;
