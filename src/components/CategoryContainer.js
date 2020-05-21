import React from "react";
import PropTypes from "prop-types";
import { uuid } from "../util";
//components
import CategoryItem from "./CategoryItem";
//styles
import "./styles/CategoryContainer.scss";

export default function CategoryContainer({ arrayCategories, changeCategory }) {
  const categories = arrayCategories.map((el) => {
    return (
      <CategoryItem
        categoryTitle={el.title}
        changeCategory={changeCategory}
        key={uuid()}
      />
    );
  });
  return <div className="category-wrapper">{categories}</div>;
}
CategoryContainer.propTypes = {
  arrayCategories: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

CategoryContainer.defaultProps = {
  arrayCategories: [
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
  changeCategory: (title) => {
    console.log(title + " yes");
  },
};
