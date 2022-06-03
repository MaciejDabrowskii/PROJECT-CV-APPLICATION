/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import ProfileImg from "./edit-mode-profle-img";

class GeneralInfo extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const { handleChange, personalData, onPaste } = this.props;
    return (
      <div className="general-info">
        <ProfileImg
          onChange={handleChange}
          personalData={personalData}
          onPaste={onPaste}
        />
        <form
          className="general-form"
        >
          <label htmlFor="general-name">
            Name:
            <input
              name="personalData"
              id="name"
              type="text"
              minLength="2"
              placeholder="John Doe"
              onChange={handleChange}
              value={personalData.name}
            />

          </label>
          <label htmlFor="birth">
            Birth Date:
            <input
              name="personalData"
              id="birth"
              type="text"
              placeholder="DD.MM.YYYY"
              onChange={handleChange}
              value={personalData.birth}
            />

          </label>
          <label htmlFor="phone">
            Phone number:
            <input
              name="personalData"
              id="phone"
              type="text"
              minLength="9"
              placeholder="999999999"
              onChange={handleChange}
              value={personalData.phone}
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              name="personalData"
              id="email"
              type="email"
              minLength="2"
              placeholder="yourEmail@email.com"
              onChange={handleChange}
              value={personalData.email}
            />

          </label>
          <label htmlFor="website">
            Website:
            <input
              name="personalData"
              id="website"
              type="text"
              minLength="5"
              placeholder="yourPage.com"
              onChange={handleChange}
              value={personalData.website}
            />

          </label>
          <label htmlFor="github">
            Github:
            <input
              name="personalData"
              id="github"
              type="text"
              minLength="5"
              placeholder="yourPage.com"
              onChange={handleChange}
              value={personalData.github}
            />

          </label>
          <label htmlFor="linkedin">
            Linkedin
            <input
              name="personalData"
              id="linkedin"
              type="text"
              minLength="5"
              placeholder="yourPage.com"
              onChange={handleChange}
              value={personalData.linkedin}
            />

          </label>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
