/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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
          <button
            name="language"
            data-key="languages"
            className="languages-submit submit-btn"
            type="button"
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

export default Languages;
