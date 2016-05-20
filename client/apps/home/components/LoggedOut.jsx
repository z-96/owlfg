import React from "react";
import { Link } from "react-router";

import Button from "modules/Button";

const LoggedOut = React.createClass({
  propTypes: {
    authenticate: React.PropTypes.func,
  },

  render() {
    return (
      <div className="home-loggedout">
        <Button type="primary" onClick={this.props.authenticate}>
          Sign in with Battle.net
        </Button>
        <div className="home-loggedout-divider">or</div>
        <Button type="link" to="/groups">
          Browse Groups
        </Button>
      </div>
    );
  },
});

export default LoggedOut;
