/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";

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
        <form>
          <label htmlFor="comapnyName">Company Name:</label>
          <input
            name="experience"
            id="comapnyName"
            type="text"
            minLength="2"
            placeholder="Company Name"
            onChange={handleChange}
            value={experience.comapnyName}
          />
          <label htmlFor="position">Position:</label>
          <input
            name="experience"
            id="position"
            type="text"
            minLength="2"
            placeholder="Frontend Developer"
            onChange={handleChange}
            value={experience.position}
          />
          <label htmlFor="jobStart">Start Year:</label>
          <input
            name="experience"
            id="jobStart"
            type="text"
            minLength="4"
            maxLength="4"
            onChange={handleChange}
            value={experience.jobStart}
          />
          <label htmlFor="jobEnd">End Year:</label>
          <input
            name="experience"
            id="jobEnd"
            type="text"
            minLength="4"
            maxLength="4"
            onChange={handleChange}
            value={experience.jobEnd}
          />
          <label htmlFor="description">Job description:</label>
          <textarea
            name="experience"
            id="description"
            rows="4"
            cols="40"
            onChange={handleChange}
            value={experience.description}
          />
          <input
            name="experience"
            className="submit-experience-btn"
            type="submit"
            data-key="jobs"
            value="Confirm"
            onClick={onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Experience;
