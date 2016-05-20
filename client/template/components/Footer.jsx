import React from "react";
import { Link } from "react-router";

import "css/template/footer";

const Footer = React.createClass({
  render() {
    return (
      <footer className="owlfg-footer">
        <Link className="owlfg-footer-link" to="/legal">Legal</Link>
        <Link className="owlfg-footer-link" to="/about">About</Link>
        <Link className="owlfg-footer-link" to="/contact">Contact</Link>
      </footer>
    );
  },
});

export default Footer;
