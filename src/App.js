import React, { Component } from "react";
import GeneralInfo from "./components/general-info";

class App extends Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return (
      <div className="App">
        <GeneralInfo />
      </div>
    );
  }
}

export default App;
