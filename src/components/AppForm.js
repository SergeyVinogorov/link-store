import React, { useState } from "react";
import PropTypes from "prop-types";
import withOverlay from "./Overlay";
//components
import AppButton from "./AppButton";
import AppInput from "./AppInput";
import CategorySelect from "./CategorySelect";

const AppForm = ({ isCreate }) => {
  const [nameInput, setNameInput] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const nameId = isCreate ? "Create" : "Update";
  const categories = [
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "main",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "not main",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "raw",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "gets",
    },
    {
      title: "Диджитал Сектор",
      currentLink: "http://digital-sector.ru/",
      groupLink: "puts",
    },
  ];
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
      <AppButton btnTitle={nameId} />
    </form>
  );
};
AppForm.propTypes = {
  isCreate: PropTypes.bool,
};

AppForm.defaultProps = {
  isCreate: true,
};
export default withOverlay(AppForm);
