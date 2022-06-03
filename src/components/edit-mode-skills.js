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
        <form>
          <label htmlFor="type">Skill:</label>
          <input
            name="skill"
            id="type"
            className="skill-type"
            type="text"
            onChange={handleChange}
            value={skill}
          />
          <button
            name="skill"
            className="skill-submit submit-btn"
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
