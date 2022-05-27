/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";

class GeneralInfo extends Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return (
      <div className="general-info">
        <h1>GENERAL INFO</h1>
        <form>
          <label htmlFor="input-name">Name:</label>
          <input id="input-name" type="text" />
          <label htmlFor="input-email">E-mail:</label>
          <input id="input-email" type="email" />
          <label htmlFor="input-phone">Phone number:</label>
          <input id="input-phone" type="text" />
          <label htmlFor="input-page">Page:</label>
          <input id="input-page" type="text" />
        </form>
        <div className="buttons-container">
          <button className="edit-btn" type="button">Edit</button>
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
