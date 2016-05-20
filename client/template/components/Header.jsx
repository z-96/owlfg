import React from "react";
import { Link } from "react-router";

import "css/template/header";

const Header = React.createClass({
  render() {
    return (
      <nav className="owlfg-header">
        <h1 className="owlfg-header-title">
          <Link to="/">
            Overwatch LFG
          </Link>
        </h1>
      </nav>
    );
  },
});

export default Header;
