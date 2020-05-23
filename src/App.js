import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//styles
import "./App.scss";
//components
import LinksContainer from "./components/LinksContainer";
import CategoryContainer from "./components/CategoryContainer";

function App(props) {
  const [search, setSearch] = useState("");
  const [sortedLinks, setSortedLinks] = useState([]);
  const [activeTitle, setActiveTitle] = useState("All");
  useEffect(() => {
    let result = [];
    props.links.categories.map((el) => {
      el.links.map((link) => result.push(link));
    });
    setSortedLinks(result);
  }, []);
  const toggleCategory = (title) => {
    if (title === "All") {
      let result = [];
      props.links.categories.map((el) => {
        el.links.map((link) => result.push(link));
      });
      setSortedLinks(result);
      setActiveTitle("All");
    } else {
      const filtered = props.links.categories.filter((el) => {
        if (el.name === title) {
          return el.links;
        }
      });
      setActiveTitle(filtered[0].name);
      setSortedLinks(filtered[0].links);
    }
  };
  return (
    <div className="app">
      <main className="app-main">
        <div className="app-main__content">
          <CategoryContainer
            arrayCategories={props.links.categories}
            changeCategory={toggleCategory}
            activeTitle={activeTitle}
          />
          <div className="app-container-links">
            <LinksContainer arrayLinks={sortedLinks} />
          </div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    addOneLink: () => dispatch({ type: "CREATE" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
