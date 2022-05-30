/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

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
      onSubmitExperience,
      experience,
    } = this.props;
    return (
      <form>
        <label htmlFor="comapnyName">School Name:</label>
        <input
          name="experience"
          id="comapnyName"
          type="text"
          minLength="2"
          placeholder="School name"
          onChange={handleChange}
          value={experience.comapnyName}
        />
        <label htmlFor="position">Subject and Title:</label>
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
          className="submit-school-btn"
          type="submit"
          value="Confirm"
          onClick={onSubmitExperience}
        />
      </form>
    );
  }
}

export default Experience;
