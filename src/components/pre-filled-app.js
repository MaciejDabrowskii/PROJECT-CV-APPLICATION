// /* eslint-disable max-len */
// /* eslint-disable no-nested-ternary */
// /* eslint-disable no-return-assign */
// /* eslint-disable react/no-access-state-in-setstate */
// /* eslint-disable react/destructuring-assignment */

// import React, { Component } from "react";
// import "./style.css";
// import uniqid from "uniqid";
// import DisplayPreview from "./components/preview-mode";
// import DisplayEdit from "./components/edit-mode";
// import DisplayHeader from "./components/header";
// import DisplayFooter from "./components/footer";

// class App extends Component
// {
//   constructor(props)
//   {
//     super(props);

//     this.state = {
//       editMode: true,
//       modeText: "Preview",
//       personalData: {
//         profileImg: "https://i.pinimg.com/564x/05/01/95/050195e6a48d609d5e8bbf8392a181b6.jpg",
//         name: "Maciej Dabrowski",
//         birth: "16.12.1988",
//         phone: "+48 518228847",
//         email: "dabrowski.mac.1@gmail.com",
//         website: "https://github.com/MaciejDabrowskii",
//         github: "https://github.com/MaciejDabrowskii",
//         linkedin: "https://pl.linkedin.com/",
//         schools: [
//           {
//             schoolName: "Harvard Uniwersity",
//             subject: "Masters in Biology",
//             dateStart: "2004",
//             dateEnd: "2010",
//             id: uniqid(),
//           },
//           {
//             schoolName: "Columbia Uniwersity",
//             subject: "Bechelor in Biology",
//             dateStart: "1999",
//             dateEnd: "2000",
//             id: uniqid(),
//           },
//         ],
//         jobs: [
//           {
//             comapnyName: "Klub Puzzle",
//             position: "Menager",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut eros tincidunt, placerat augue vitae, consectetur sapien. Nullam vitae lectus feugiat, porta tortor finibus, fringilla velit. Pellentesque pellentesque mollis magna, nec accumsan eros hendrerit vitae. In nibh tellus, eleifend mollis sollicitudin ut, ornare at turpis. Aenean id nunc lorem. Cras vel aliquam ipsum. Duis placerat placerat neque nec pretium.",
//             jobStart: "1999",
//             jobEnd: "2000",
//             id: uniqid(),
//           },
//           {
//             comapnyName: "Klub Szajba",
//             position: "Menager",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut eros tincidunt, placerat augue vitae, consectetur sapien. Nullam vitae lectus feugiat, porta tortor finibus, fringilla velit. Pellentesque pellentesque mollis magna, nec accumsan eros hendrerit vitae. In nibh tellus, eleifend mollis sollicitudin ut, ornare at turpis. Aenean id nunc lorem. Cras vel aliquam ipsum. Duis placerat placerat neque nec pretium.",
//             jobStart: "2017",
//             jobEnd: "2022",
//             id: uniqid(),
//           },
//           {
//             comapnyName: "Hotel Zamek Topacz",
//             position: "Menager",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut eros tincidunt, placerat augue vitae, consectetur sapien. Nullam vitae lectus feugiat, porta tortor finibus, fringilla velit. Pellentesque pellentesque mollis magna, nec accumsan eros hendrerit vitae. In nibh tellus, eleifend mollis sollicitudin ut, ornare at turpis. Aenean id nunc lorem. Cras vel aliquam ipsum. Duis placerat placerat neque nec pretium.",
//             jobStart: "2005",
//             jobEnd: "2009",
//             id: uniqid(),
//           },
//         ],
//         skills: [
//           {
//             type: "Obsluga sheakera",
//             id: uniqid(),
//           }, {
//             type: "Obsluga odkurzacza",
//             id: uniqid(),
//           }, {
//             type: "Github",
//             id: uniqid(),
//           }, {
//             type: "Hazard",
//             id: uniqid(),
//           }, {
//             type: "VSCode",
//             id: uniqid(),
//           }, {
//             type: "HTML",
//             id: uniqid(),
//           },
//         ],
//         languages: [
//           {
//             languageName: "English",
//             proficiency: "Advanced",
//             id: uniqid(),
//           }, {
//             languageName: "Polish",
//             proficiency: "Native",
//             id: uniqid(),
//           },
//         ],
//       },
//       education: {
//         schoolName: "",
//         subject: "",
//         dateStart: "",
//         dateEnd: "",
//         id: uniqid(),
//       },
//       experience: {
//         comapnyName: "",
//         position: "",
//         description: "",
//         jobStart: "",
//         jobEnd: "",
//         id: uniqid(),
//       },
//       skill: {
//         type: "",
//         id: uniqid(),
//       },
//       language: {
//         languageName: "",
//         proficiency: "" || "Elementary",
//         id: uniqid(),
//       },
//     };
//     // this.handleChange.bind(this);
//     // this.onSubmitSchool.bind(this);
//     // this.onDeleteSchool.bind(this);
//   }

//   onChange = (e) =>
//   {
//     const { value, id, name } = e.target;
//     this.setState((prevState) => ({
//       [name]: {
//         ...prevState[name],
//         [id]: value,
//       },
//     }));
//   };

//   setSelectValue = (value) =>
//   {
//     this.setState((prevState) => ({
//       language: {
//         ...prevState.language,
//         proficiency: value.value,
//       },
//     }));
//   };

//   onSubmit = (e) =>
//   {
//     e.preventDefault();
//     const { name } = e.target;
//     const { key } = e.target.dataset;
//     const emptyState = {};
//     const keys = Object.keys(this.state[name]);
//     this.setState((prevState) => ({
//       ...prevState,
//       personalData: {
//         ...prevState.personalData,
//         [key]: this.state.personalData[key]
//           .filter((el) => el.id !== this.state[name].id)
//           .concat(this.state[name]),
//       },
//     }));
//     keys.forEach((el) => (
//       el === "id" ? emptyState[el] = uniqid()
//         : el === "proficiency" ? emptyState[el] = "Elementary"
//           : emptyState[el] = ""
//     ));
//     this.setState((prevState) => ({
//       ...prevState,
//       [name]: emptyState,
//     }));
//   };

//   onDelete = (e) =>
//   {
//     const { personalData } = this.state;
//     const { name } = e.target;
//     this.setState((prevState) => ({
//       ...prevState,
//       personalData: {
//         ...prevState.personalData,
//         [name]: personalData[name]
//           .filter((el) => el.id !== e.target.parentElement.dataset.key),
//       },
//     }));
//   };

//   onPaste = (e) =>
//   {
//     this.setState((prevState) => ({
//       ...prevState,
//       personalData: {
//         ...prevState.personalData,
//         profileImg: e.clipboardData.getData("Text"),

//       },
//     }));
//   };

//   onEdit = (e) =>
//   {
//     const { personalData } = this.state;
//     const { name } = e.target;
//     const { key } = e.target.dataset;
//     const element = personalData[name]
//       .filter((el) => el.id === e.target.parentElement.dataset.key);
//     this.setState({
//       [key]: element[0],
//     });
//   };

//   onChangeMode = () =>
//   {
//     this.setState((prevState) => ({
//       editMode: !prevState.editMode,
//     }));
//     switch (this.state.editMode)
//     {
//       case true: this.setState({ modeText: "Edit" });
//         break;
//       case false: this.setState({ modeText: "Preview" });
//         break;
//       default:
//     }
//   };

//   render()
//   {
//     const {
//       editMode,
//       personalData,
//       education,
//       experience,
//       language,
//       skill,
//       modeText,
//     } = this.state;

//     return (
//       <div className="App">
//         <DisplayHeader
//           onChangeMode={this.onChangeMode}
//           modeText={modeText}
//         />
//         {/* Display when in edit mode */}
//         {this.state.editMode
//         && (
//         <DisplayEdit
//           personalData={personalData}
//           editMode={editMode}
//           education={education}
//           experience={experience}
//           language={language}
//           skill={skill}
//           onDelete={this.onDelete}
//           onEdit={this.onEdit}
//           onChange={this.onChange}
//           onSubmit={this.onSubmit}
//           onPaste={this.onPaste}
//           setSelectValue={this.setSelectValue}
//         />
//         )}
//         {/* Display when NOT in edit mode */}
//         {!this.state.editMode
//         && (

//         <DisplayPreview
//           personalData={personalData}
//           editMode={editMode}
//           onDelete={this.onDelete}
//           onEdit={this.onEdit}
//         />
//         )}
//         <DisplayFooter />
//       </div>
//     );
//   }
// }
// export default App;
