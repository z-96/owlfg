import React from "react";
import { Link } from "react-router";

import "css/modules/button";

const Button = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    type: React.PropTypes.oneOf([
      "primary",
      "default",
      "link",
      "dangerous",
    ]),
    isLoading: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    to: React.PropTypes.string,
    link: React.PropTypes.bool,
    popup: React.PropTypes.bool,
  },

  _handleClick(ev) {
    if (this.props.onClick) {
      this.props.onClick(ev);
    }
    if (this.props.popup) {
      ev.preventDefault();
      const opts = {
        width: 600,
        height: 400,
        toolbar: 0,
        resizable: 0,
      };
      opts.left = window.screen.width / 2 - opts.width / 2;
      opts.top = window.screen.height / 2 - opts.height * 0.75;

      window.open(
        this.props.to,
        "bnet",
        Object.keys(opts).reduce((prev, key) => {
          let start = prev;
          if (start.length) {
            start = `${start},`;
          }
          return `${start}${key}=${opts[key]}`;
        }, "")
      );
    }
  },

  render() {
    const { to, link, popup, type, children, className } = this.props;
    const classes = [
      "owbtn",
      `owbtn--${type}`,
    ];
    if (className) {
      classes.push(className);
    }

    let target = null;
    if (link) {
      target = "_self";
    }
    if (popup) {
      target = "_blank";
    }

    return (
      <Link
        to={to}
        target={target}
        className={classes.join(" ")}
        onClick={this._handleClick}
      >{children}</Link>
    );
  },
});

export default Button;
