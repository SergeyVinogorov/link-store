import React from "react";
import PropTypes from "prop-types";
import { uuid } from "../util";

export default function CategorySelect({
  selectValue,
  selectChange,
  selectTitle,
  selectName,
  arrayCategory,
}) {
  const options = arrayCategory.map((el) => {
    return (
      <option value={el.groupLink} key={uuid()}>
        {el.groupLink}
      </option>
    );
  });
  return (
    <div className={"app-input-wrapper app-input-wrapper--isForm"}>
      <label
        htmlFor={selectName}
        className={"app-input-title app-input-title--isForm"}
      >
        {selectTitle}
      </label>
      <select
        value={selectValue}
        onChange={selectChange}
        name={selectName}
        id={selectName}
        className="app-input"
      >
        {options}
      </select>
    </div>
  );
}
CategorySelect.propTypes = {
  selectValue: PropTypes.string.isRequired,
  selectChange: PropTypes.func.isRequired,
  selectTitle: PropTypes.string.isRequired,
  arrayCategory: PropTypes.array.isRequired,
  selectName: PropTypes.string,
};

CategorySelect.defaultProps = {
  selectValue: "",
  selectChange: () => {
    console.log("something wrong");
  },
  selectTitle: "Select categories",
  selectName: "select",
  arrayCategory: [
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
  ],
};
