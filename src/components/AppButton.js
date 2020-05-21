import React, { Fragment } from "react";
import PropTypes from "prop-types";
//styles
import "./styles/AppButton.scss";

export default function AppButton({ openModal, btnTitle }) {
  return (
    <Fragment>
      <button type="button" onClick={openModal} className="app-btn app-hover">
        {btnTitle}
      </button>
    </Fragment>
  );
}
AppButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  btnTitle: PropTypes.string,
};

AppButton.defaultProps = {
  openModal: () => {
    console.log("Opened");
  },
  btnTitle: "Add link",
};
