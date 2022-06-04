/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const options = [
  { value: "Elementary", label: "Elementary" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
  { value: "Native", label: "Native" },
];

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
      setSelectValue,
    } = this.props;
    return (
      <div
        className="languages-input-container"
      >
        <form
          className="languages-form"
        >
          <label htmlFor="languageName">
            Language:
            <input
              name="language"
              id="languageName"
              className="languages-name"
              type="text"
              onChange={handleChange}
              value={language.languageName}
            />

          </label>
          <label htmlFor="proficiency">
            Proficiency:
            <Select
              options={options}
              placeholder="Select proficiency"
              name="language"
              id="proficiency"
              className="languages-proficiency"
              onChange={setSelectValue}
            />

          </label>
          <button
            name="language"
            data-key="languages"
            className="languages-submit-btn submit-btn"
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
