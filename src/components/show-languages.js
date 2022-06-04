/* eslint-disable react/prop-types */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

function ShowLanguages(props)
{
  const {
    inEditMode, personalData, onDelete, onEdit,
  } = props;
  return (
    <ul
      className="languages-list fa-ul"
    >
      {personalData.languages.map((language) => (
        <li
          key={language.id}
          data-key={language.id}
        >
          <span className="fa-li list-marker">
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="fa-regular fa-square"
            />
          </span>
          <div
            className="language"
          >
            <p
              className="language-name"
            >
              {language.languageName}
            </p>
            <p
              className="language-proficiency"
            >
              Proficiency:
              {" "}
              {language.proficiency}
            </p>
          </div>
          {inEditMode
              && (
              <div
                data-key={language.id}
                className="button-container button-container-language"
              >
                <button
                  type="button"
                  name="languages"
                  onClick={onDelete}
                >
                  <FontAwesomeIcon
                    name="schools"
                    icon={faTrash}
                  />
                </button>
                <button
                  type="button"
                  name="languages"
                  data-key="language"
                  onClick={onEdit}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="fa-solid"
                  />
                </button>
              </div>
              )}
        </li>
      ))}
    </ul>
  );
}
export default ShowLanguages;
