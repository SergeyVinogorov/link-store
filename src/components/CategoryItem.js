import React from "react";
import PropTypes from "prop-types";
//styles
import "./styles/CategoryItem.scss";

export default function CategoryItem({ categoryTitle, changeCategory }) {
  return (
    <div
      className="category-title app-hover"
      onClick={() => changeCategory(categoryTitle)}
    >
      <p className="category-title__text">{categoryTitle}</p>
    </div>
  );
}
CategoryItem.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

CategoryItem.defaultProps = {
  categoryTitle: "Frontend",
  changeCategory: (title) => {
    console.log(title);
  },
};
