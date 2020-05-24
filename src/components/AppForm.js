import React, { useState } from "react";
import PropTypes from "prop-types";
import withOverlay from "./Overlay";
import { uuid } from "../util";
import { connect } from "react-redux";

//components
import AppButton from "./AppButton";
import AppInput from "./AppInput";
import CategorySelect from "./CategorySelect";

const AppForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState(props.nameCategory);
  const isCreate = props.isCreate;
  const categories = props.categories;
  const nameId = isCreate ? "Create" : "Update";
  const addLinks = () => {
    let val = {
      name: category,
      links: [
        {
          id: uuid(),
          title: nameInput,
          currentLink: link,
        },
      ],
    };
    props.addOneLink(val);
    setNameInput("");
    setLink("");
    setCategory(props.nameCategory);
    props.refreshSorted(props.nameCategory);
    return props.hideHandler();
  };
  return (
    <form className="app-form">
      <p className="app-form__header">{`${nameId} link`}</p>
      <AppInput
        appInputValue={nameInput}
        appInputChange={(event) => {
          setNameInput(event.target.value);
        }}
        appInputTitle="Title:"
        appInputPlaceholder="Set title here..."
        isForm={true}
        appInputName={`${nameId}-name`}
      />
      <AppInput
        appInputValue={link}
        appInputChange={(event) => {
          setLink(event.target.value);
        }}
        appInputTitle="Link:"
        appInputPlaceholder="Put link here..."
        isForm={true}
        appInputName={`${nameId}-link`}
      />
      <CategorySelect
        selectValue={category}
        selectChange={(event) => {
          setCategory(event.target.value);
        }}
        selectTitle="Select category:"
        selectName={`${nameId}-select`}
        arrayCategory={categories}
      />
      <AppButton btnTitle={nameId} openModal={addLinks} />
    </form>
  );
};
AppForm.propTypes = {
  isCreate: PropTypes.bool,
  categories: PropTypes.array.isRequired,
  nameCategory: PropTypes.string.isRequired,
  refreshSorted: PropTypes.func.isRequired,
};

AppForm.defaultProps = {
  isCreate: true,
  categories: [
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
  nameCategory: "Frontend",
  refreshSorted: () => {
    console.log("something wrong");
  },
};

const mapDispatchToProps = (dispatch) => ({
  addOneLink: (val) => dispatch({ type: "CREATE", val }),
});
export default connect(null, mapDispatchToProps)(withOverlay(AppForm));
