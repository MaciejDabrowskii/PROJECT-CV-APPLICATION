/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import GeneralInfo from "./components/general-info";
import Education from "./components/education";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      editMode: true,
      personalData: {
        name: "",
        email: "",
        phone: "",
        website: "",
        github: "",
        linkedin: "",
        schools: [],
        jobs: [],
      },
      education: {
        schoolName: "",
        subject: "",
        dateStart: "",
        dateEnd: "",
      },
      experience: {
        comapnyName: "",
        position: "",
        tasks: [],
        date: "",
      },
    };

    this.handleChange.bind(this);
    this.onSubmitSchool.bind(this);
  }

  handleChange = (e) =>
  {
    switch (e.target.id)
    {
      case "general-name":
        this.setState({
          personalData: {
            name: e.target.value,
          },
        });
        break;

      case "general-email":
        this.setState({
          personalData: {
            email: e.target.value,
          },
        });
        break;

      case "general-phone":
        this.setState({
          personalData: {
            number: e.target.value,
          },
        });
        break;
      case "general-github":
        this.setState({
          personalData: {
            github: e.target.value,
          },
        });
        break;
      case "general-linkedin":
        this.setState({
          personalData: {
            number: e.target.value,
          },
        });
        break;
      case "general-website":
        this.setState({
          personalData: {
            website: e.target.value,
          },
        });
        break;
      case "education-school":
        this.setState({
          education: {
            schoolName: e.target.value,
          },
        });
        break;
      case "education-subject":
        this.setState({
          education: {
            subject: e.target.value,
          },
        });
        break;
      case "education-start":
        this.setState({
          education: {
            dateStart: e.target.value,
          },
        });
        break;
      case "education-end":
        this.setState({
          education: {
            dateEnd: e.target.value,
          },
        });
        break;
      default:
    }
  };

  onSubmitSchool = (e) =>
  {
    e.preventDefault();
    this.setState({
      personalData: {
        schools: this.state.personalData.schools.concat(this.state.education),
      },
      education: {
        schoolName: "",
        subject: "",
        dateStart: "",
        dateEnd: "",
      },
    });
    console.log(this.state.personalData.schools.length);
  };

  render()
  {
    return (
      <div className="App">
        <h2>GENERAL INFO</h2>
        <GeneralInfo handleChange={this.handleChange} personalData={this.state} />
        <h2>Education</h2>
        <div className="education">
          <Education handleChange={this.handleChange} onSubmitSchool={this.onSubmitSchool} />
          <button
            className="add-school-btn"
            type="button"
          >
            Add School
          </button>
        </div>
      </div>
    );
  }
}

export default App;
