/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
            id="general-name"
            type="text"
            minLength="2"
            placeholder="John Doe"
            onChange={this.props.handleChange}
            value={this.props.personalData.name}
            required
          />
          <label htmlFor="general-email">E-mail:</label>
          <input
            id="general-email"
            type="email"
            minLength="2"
            placeholder="yourEmail@email.com"
            onChange={this.props.handleChange}
            value={this.props.personalData.email}
            required
          />
          <label htmlFor="general-phone">Phone number:</label>
          <input
            id="general-phone"
            type="number"
            minLength="9"
            placeholder="999999999"
            onChange={this.props.handleChange}
            value={this.props.personalData.phone}
            required
          />
          <label htmlFor="general-website">Website:</label>
          <input
            id="general-website"
            type="text"
            minLength="5"
            placeholder="yourPage.com"
            onChange={this.props.handleChange}
            value={this.props.personalData.website}
          />
          <label htmlFor="general-github">Github:</label>
          <input
            id="general-github"
            type="text"
            minLength="5"
            placeholder="yourPage.com"
            onChange={this.props.handleChange}
            value={this.props.personalData.github}
          />
          <label htmlFor="general-linkedin">Linkedin</label>
          <input
            id="general-linkedin"
            type="text"
            minLength="5"
            placeholder="yourPage.com"
            onChange={this.props.handleChange}
            value={this.props.personalData.linkedin}
          />
          <input
            id="submit-btn"
            type="submit"
            value="Submit"
          />
          <button
            className="edit-btn"
            type="button"
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
