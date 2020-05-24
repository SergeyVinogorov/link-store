import React from "react";
import PropTypes from "prop-types";

export default function AppInput({
  appInputValue,
  appInputChange,
  appInputTitle,
  appInputPlaceholder,
  isForm,
  appInputName,
}) {
  return (
    <div
      className={`app-input-wrapper ${
        isForm ? "app-input-wrapper--isForm" : ""
      }`}
    >
      <label
        htmlFor={appInputName}
        className={`app-input-title ${isForm ? "app-input-title--isForm" : ""}`}
      >
        {appInputTitle}
      </label>
      <input
        type="text"
        name={appInputName}
        id={appInputName}
        value={appInputValue}
        onChange={appInputChange}
        onKeyUp={appInputChange}
        placeholder={appInputPlaceholder}
        className="app-input"
      />
    </div>
  );
}
AppInput.propTypes = {
  appInputValue: PropTypes.string.isRequired,
  appInputChange: PropTypes.func.isRequired,
  appInputTitle: PropTypes.string.isRequired,
  appInputPlaceholder: PropTypes.string,
  isForm: PropTypes.bool,
  appInputName: PropTypes.string,
};

AppInput.defaultProps = {
  appInputValue: "",
  appInputChange: () => {
    console.log("something wrong");
  },
  appInputTitle: "Search Link",
  appInputPlaceholder: " Start type...",
  isForm: true,
  appInputName: "search",
};
