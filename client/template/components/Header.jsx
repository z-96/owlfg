import React from "react";
import { Link } from "react-router";

import "css/template/header";

const Header = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
  },

  render() {
    const { user } = this.props;

    const titleClasses = ["owlfg-header-title"];
    if (!user && typeof location !== undefined && location.pathname === "/") {
      titleClasses.push("owlfg-header-title--oversized");
    }

    return (
      <nav className="owlfg-header">
        <h1 className={titleClasses.join(" ")}>
          <Link to="/">
            Overwatch LFG
          </Link>
        </h1>
      </nav>
    );
  },
});

export default Header;
