import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "css/template/app";

const Template = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  render() {
    return (
      <div className="owlfg">
        <Header />
        <div className="owlfg-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  },
});

export default Template;
