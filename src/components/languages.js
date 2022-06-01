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
      onSubmit,
      language,
    } = this.props;
    return (
      <div
        className="languages-input-container"
      >
        <form>
          <label htmlFor="languageName">Language:</label>
          <input
            name="language"
            id="languageName"
            className="languages-name"
            type="text"
            onChange={handleChange}
            value={language.languageName}
          />
          <label htmlFor="proficiency">Proficiency</label>
          <select
            name="language"
            id="proficiency"
            className="languages-proficiency"
            onChange={handleChange}
          >
            <option value="Elementary">Elementary</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Native">Native</option>
          </select>
          <input
            name="language"
            className="languages-submit"
            type="submit"
            value="Confirm"
            onClick={onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Languages;
