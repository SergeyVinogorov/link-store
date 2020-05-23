import React from "react";
import PropTypes from "prop-types";
import { uuid } from "../util";
//components
import AppLink from "./AppLink";
//styles
import "./styles/LinksContainer.scss";
export default function LinksContainer({ arrayLinks }) {
  const links = arrayLinks.map((el) => {
    return (
      <AppLink title={el.title} currentLink={el.currentLink} key={uuid()} />
    );
  });
  return <div className="container-links">{links}</div>;
}
LinksContainer.propTypes = {
  arrayLinks: PropTypes.array.isRequired,
};

LinksContainer.defaultProps = {
  arrayLinks: [
    {
      name: "Frontend",
      links: [
        {
          id: uuid(),
          title: "React",
          currentLink: "https://reactjs.org/",
        },
      ],
    },
    {
      name: "Backend",
      links: [
        {
          id: uuid(),
          title: "Oracle",
          currentLink: "https://www.oracle.com/index.html",
        },
      ],
    },
  ],
};
