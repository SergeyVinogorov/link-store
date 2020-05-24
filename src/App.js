import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllLinks, filterBySearch, loadState } from "./util";
//styles
import "./App.scss";
//components
import LinksContainer from "./components/LinksContainer";
import CategoryContainer from "./components/CategoryContainer";
import AppInput from "./components/AppInput";
import AppButton from "./components/AppButton";
import AppForm from "./components/AppForm";

function App(props) {
  const [search, setSearch] = useState("");
  const [sortedLinks, setSortedLinks] = useState([]);
  const [activeTitle, setActiveTitle] = useState("All");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  //initiate state
  useEffect(() => {
    let localState = loadState();
    if (localState) {
      let result = getAllLinks(localState.links.categories);
      return setSortedLinks(result);
    } else {
      let result = getAllLinks(props.links.categories);
      return setSortedLinks(result);
    }
  }, []);

  const sortingStore = (title) => {
    let sortedResult = [];
    let sortedTitile = "";
    if (title === "All") {
      sortedResult = getAllLinks(props.links.categories);
      sortedTitile = "All";
    } else {
      let filtered = props.links.categories.filter((el) => {
        return el.name === title;
      });
      sortedResult = filtered[0].links;
      sortedTitile = filtered[0].name;
    }
    return {
      sortedResult,
      sortedTitile,
    };
  };

  const toggleCategory = (title) => {
    const sorting = sortingStore(title);
    setActiveTitle(sorting.sortedTitile);
    if (search) {
      document.getElementById("burger").checked = false;
      return searchByName(search, sorting.sortedResult);
    } else {
      setSortedLinks(sorting.sortedResult);
      document.getElementById("burger").checked = false;
    }
  };

  const searchByName = (el, sorted) => {
    if (sorted) {
      let filteredSearch = filterBySearch(sorted, search);
      setSortedLinks(filteredSearch);
    } else {
      const sorting = sortingStore(activeTitle);
      setSearch(el);
      let filteredSearch = filterBySearch(sorting.sortedResult, search);
      setSortedLinks(filteredSearch);
    }
  };

  return (
    <div className="app">
      <main className="app-main">
        <div className="app-main__content">
          <div className="category__burger" id="testBurger">
            <input type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
            <CategoryContainer
              arrayCategories={props.links.categories}
              changeCategory={toggleCategory}
              activeTitle={activeTitle}
            />
          </div>

          <div className="app-wrapper-container">
            <AppButton openModal={() => setIsOpenModal(true)} />
            <div className="app-container-links">
              <AppInput
                appInputValue={search}
                appInputChange={(event) => {
                  console.log(event.target.value);

                  searchByName(event.target.value);
                }}
                appInputTitle="Search by name"
                isForm={false}
                appInputName="search"
              />
              <LinksContainer arrayLinks={sortedLinks} />
            </div>
          </div>
          {isOpenModal ? (
            <AppForm
              isCreate={isCreate}
              hideHandler={() => setIsOpenModal(false)}
              nameCategory={activeTitle}
              categories={props.links.categories}
              refreshSorted={toggleCategory}
            />
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

export default connect(mapStateToProps)(App);
