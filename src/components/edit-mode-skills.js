/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class Skills extends Component
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
      skill,
    } = this.props;
    return (
      <div
        className="skills-input-container"
      >
        <form
          className="skills-form"
        >
          <label htmlFor="type">
            Skill:
            <input
              name="skill"
              id="type"
              className="skill-type-input"
              type="text"
              onChange={handleChange}
              value={skill}
            />

          </label>
          <button
            name="skill"
            className="skill-submit-btn submit-btn"
            data-key="skills"
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

export default Skills;
