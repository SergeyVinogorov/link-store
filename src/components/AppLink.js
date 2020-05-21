import React from "react";
import PropTypes from "prop-types";
import "./styles/AppLink.scss";

export default function AppLink({ title, currentLink }) {
  return (
    <a
      href={currentLink}
      target="_blank"
      rel="noopener noreferrer"
      className="app-link__container"
    >
      <p className="app-link__title">{title}</p>
      <p className="App-link">{currentLink}</p>
    </a>
  );
}
AppLink.propTypes = {
  title: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
};

AppLink.defaultProps = {
  title: "Диджитал Сектор",
  currentLink: "http://digital-sector.ru/",
};
