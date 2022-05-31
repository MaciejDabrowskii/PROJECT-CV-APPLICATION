/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from "react";

class Languages extends Component
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
      <div
        className="languages"
      >
        <form>
          <label htmlFor="language-name">Language:</label>
          <input
            name="name"
            id="languageName"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="language-proficiency">Proficiency</label>
          <select
            name="proficiency"
            id="proficiency"
            defaultValue="Elementary"
            onChange={handleChange}
          >
            <option value="Elementary">Elementary</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Native">Native</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Languages;
