/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";

class GeneralInfo extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const { handleChange, personalData } = this.props;
    return (
      <div className="general-info">
        <form>
          <label htmlFor="general-name">Name:</label>
          <input
            name="personalData"
            id="name"
            type="text"
            minLength="2"
            placeholder="John Doe"
            onChange={handleChange}
            value={personalData.name}
          />
          <label htmlFor="birth">Birth Date:</label>
          <input
            name="personalData"
            id="birth"
            type="text"
            placeholder="DD.MM.YYYY"
            onChange={handleChange}
            value={personalData.birth}
          />
          <label htmlFor="phone">Phone number:</label>
          <input
            name="personalData"
            id="phone"
            type="text"
            minLength="9"
            placeholder="999999999"
            onChange={handleChange}
            value={personalData.phone}
          />
          <label htmlFor="email">E-mail:</label>
          <input
            name="personalData"
            id="email"
            type="email"
            minLength="2"
            placeholder="yourEmail@email.com"
            onChange={handleChange}
            value={personalData.email}
          />
          <label htmlFor="website">Website:</label>
          <input
            name="personalData"
            id="website"
            type="text"
            minLength="5"
            placeholder="yourPage.com"
            onChange={handleChange}
            value={personalData.website}
          />
          <label htmlFor="github">Github:</label>
          <input
            name="personalData"
            id="github"
            type="text"
            minLength="5"
            placeholder="yourPage.com"
            onChange={handleChange}
            value={personalData.github}
          />
          <label htmlFor="linkedin">Linkedin</label>
          <input
            name="personalData"
            id="linkedin"
            type="text"
            minLength="5"
            placeholder="yourPage.com"
            onChange={handleChange}
            value={personalData.linkedin}
          />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
