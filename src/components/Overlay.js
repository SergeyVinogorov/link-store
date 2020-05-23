import React, { Component } from "react";
import "./styles/Overlay.scss";

const withOverlay = (WrappedComponent) => {
  return class extends Component {
    render = () => {
      return (
        <div>
          <div className="container">
            <div className="mainContainer">
              <WrappedComponent {...this.props} />
              <span
                fontSize="large"
                className="close"
                onClick={this.props.hideHandler}
              >
                ✕
              </span>
            </div>
            <div
              onClick={this.props.hideHandler}
              className="wrapperClick"
            ></div>
          </div>
        </div>
      );
    };
  };
};

export default withOverlay;
