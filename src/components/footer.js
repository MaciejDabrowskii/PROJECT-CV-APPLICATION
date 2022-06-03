/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line max-len
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class DisplayFooter extends Component
{
  constructor(props)
  {
    super(props);
  }

  onClick()
  {
    window
      .open("https://github.com/MaciejDabrowskii?tab=repositories", "_blank")
      .focus();
  }

  render()
  {
    return (
      <div
        className="app-footer"
      >
        <h3>Created by Maciej Dabrowski</h3>
        <FontAwesomeIcon
          icon={faGithub}
          className="fa-solid git-icon"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default DisplayFooter;
