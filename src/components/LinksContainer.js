import React from "react";
import PropTypes from "prop-types";
//containers
import AppLink from "./AppLink";
//styles
import "./styles/LinksContainer.scss";
export default function LinksContainer({ arrayLinks }) {
  const links = arrayLinks.map((el) => {
    return <AppLink title={el.title} currentLink={el.currentLink} />;
  });
  return <div className="container-links">{links}</div>;
}
LinksContainer.propTypes = {
  arrayLinks: PropTypes.array.isRequired,
};

LinksContainer.defaultProps = {
  arrayLinks: [
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
  ],
};
