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
    } = this.props;
    return (
      <form>
        <label htmlFor="education-school">School Name:</label>
        <input
          id="education-school"
          type="text"
          minLength="2"
          placeholder="School name"
          onChange={this.props.handleChange}
          required
        />
        <label htmlFor="education-subject">Subject and Title:</label>
        <input
          id="education-subject"
          type="text"
          minLength="2"
          placeholder="Subject"
          onChange={this.props.handleChange}
        />
        <label htmlFor="education-start">Start Year:</label>
        <input
          id="education-start"
          type="number"
          minLength="4"
          maxLength="4"
          onChange={this.props.handleChange}
          required
        />
        <label htmlFor="education-end">End Year:</label>
        <input
          id="education-end"
          type="nuber"
          minLength="4"
          maxLength="4"
          onChange={this.props.handleChange}
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
