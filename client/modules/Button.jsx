import React from "react";
import { Link } from "react-router";

import "css/modules/button";

const Button = React.createClass({
  propTypes: {
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
  },

  _handleClick(ev) {
    if (this.props.onClick) {
      this.props.onClick(ev);
    }
  },

  render() {
    const { to, children } = this.props;
    const type = this.props.type || "default";

    let content = "";
    if (this.props.to) {
      content = (
        <Link to={to}>{children}</Link>
      );
    }
    else {
      content = children;
    }

    const classes = [
      "owbtn",
      `owbtn--${this.props.type}`,
    ];

    return (
      <button className={classes.join(" ")} onClick={this._handleClick}>
        {content}
      </button>
    );
  },
});

export default Button;
