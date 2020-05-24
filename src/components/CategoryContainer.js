import React from "react";
import PropTypes from "prop-types";
import { uuid } from "../util";
//components
import CategoryItem from "./CategoryItem";
//styles
import "./styles/CategoryContainer.scss";

export default function CategoryContainer({
  arrayCategories,
  changeCategory,
  activeTitle,
}) {
  const title = "All";
  const categories = arrayCategories.map((el) => {
    return (
      <CategoryItem
        categoryTitle={el.name}
        changeCategory={changeCategory}
        isActive={activeTitle === el.name}
        key={uuid()}
      />
    );
  });
  return (
    <div className="category-wrapper" id="test">
      {categories}
      <CategoryItem
        categoryTitle={title}
        changeCategory={changeCategory}
        isActive={activeTitle === title}
        key={uuid()}
      />
    </div>
  );
}
CategoryContainer.propTypes = {
  arrayCategories: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired,
  activeTitle: PropTypes.string.isRequired,
};

CategoryContainer.defaultProps = {
  arrayCategories: [
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
  changeCategory: (title) => {
    console.log(title + " yes");
  },
  activeTitle: "All",
};
