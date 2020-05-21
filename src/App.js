import React from "react";
import "./App.scss";
import LinksContainer from "./components/AppButton";

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <div className="app-main__content">
          <LinksContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
