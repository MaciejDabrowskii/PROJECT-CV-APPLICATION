/* eslint-disable react/prop-types */
import React, { Component } from "react";

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
          type="button"
          onClick={onChangeMode}
        >
          {modeText}
        </button>
      </div>
    );
  }
}

export default DisplayHeader;
