/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";

class Education extends Component
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
      education,
    } = this.props;
    return (
      <div className="education-input-container">
        <form
          className="education-form"
        >
          <label htmlFor="schoolName">
            School Name:
            <input
              name="education"
              id="schoolName"
              type="text"
              minLength="2"
              placeholder="School name"
              onChange={handleChange}
              value={education.schoolName}
              required
            />

          </label>
          <label htmlFor="subject">
            Subject and Title:
            <input
              name="education"
              id="subject"
              type="text"
              minLength="2"
              placeholder="Subject"
              onChange={handleChange}
              value={education.subject}
            />

          </label>
          <label htmlFor="dateStart">
            Start Year:
            <input
              name="education"
              id="dateStart"
              minLength="4"
              maxLength="4"
              onChange={handleChange}
              value={education.dateStart}
              required
            />

          </label>
          <label htmlFor="dateEnd">
            End Year:
            <input
              name="education"
              id="dateEnd"
              minLength="4"
              maxLength="4"
              onChange={handleChange}
              value={education.dateEnd}
            />

          </label>
          <input
            name="education"
            className="submit-school-btn"
            data-key="schools"
            type="submit"
            value="Confirm"
            onClick={onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Education;
