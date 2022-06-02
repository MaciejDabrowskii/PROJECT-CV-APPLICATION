/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";

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
          <input
            name="skill"
            className="skill-submit"
            data-key="skills"
            type="submit"
            value="Confirm"
            onClick={onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Skills;
