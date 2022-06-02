/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from "react";

class ProfileImg extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      handleChange,
      personalData,
      onPaste,

    } = this.props;
    return (
      <div
        className="profile-img-container"
      >
        <img
          className="profile-img"
          alt="profile"
          src={personalData.profileImg}
        />
        <input
          name="personalData"
          id="profileImg"
          type="text"
          placeholder="Paste your img url here"
          onChange={handleChange}
          onPaste={onPaste}
        />
      </div>

    );
  }
}

export default ProfileImg;
