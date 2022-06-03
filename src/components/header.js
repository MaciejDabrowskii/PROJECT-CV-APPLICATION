/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line max-len
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

class DisplayHeader extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      onChangeMode,
      modeText,
    } = this.props;
    return (
      <div
        className="app-header"
      >
        <h1>CV CREATOR</h1>
        <button
          className="header-btn"
          type="button"
          onClick={onChangeMode}
        >
          {modeText}
          {" "}
          <FontAwesomeIcon icon={faArrowsRotate} className="fa-solid fa-sync fa-spin" />
        </button>
      </div>
    );
  }
}

export default DisplayHeader;
