/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
      onSubmitSchool,
      education,
    } = this.props;
    return (
      <form>
        <label htmlFor="schoolName">School Name:</label>
        <input
          name="education"
          id="schoolName"
          type="text"
          minLength="2"
          placeholder="School name"
          onChange={this.props.handleChange}
          value={this.props.education.schoolName}
          required
        />
        <label htmlFor="subject">Subject and Title:</label>
        <input
          name="education"
          id="subject"
          type="text"
          minLength="2"
          placeholder="Subject"
          onChange={this.props.handleChange}
          value={this.props.education.subject}
        />
        <label htmlFor="dateStart">Start Year:</label>
        <input
          name="education"
          id="dateStart"
          type="number"
          minLength="4"
          maxLength="4"
          onChange={this.props.handleChange}
          value={this.props.education.dateStart}
          required
        />
        <label htmlFor="dateEnd">End Year:</label>
        <input
          name="education"
          id="dateEnd"
          type="nuber"
          minLength="4"
          maxLength="4"
          onChange={this.props.handleChange}
          value={this.props.education.dateEnd}
        />
        <input
          className="submit-school-btn"
          type="submit"
          value="Confirm"
          onClick={this.props.onSubmitSchool}
        />
      </form>
    );
  }
}

export default Education;
