import React from "react";
import { Link } from "react-router";

import Button from "modules/Button";

import "css/apps/home/loggedout";

const LoggedOut = React.createClass({
  propTypes: {
    authenticate: React.PropTypes.func,
  },

  render() {
    return (
      <div className="home-loggedout">
        <Button
          to="/auth"
          link={true}
          className="home-loggedout-auth"
          type="primary"
        >
          Sign in with Battle.net
        </Button>

        <div className="home-loggedout-divider">or</div>

        <Button className="home-loggedout-browse" type="link" to="/groups">
          Browse Groups
        </Button>
      </div>
    );
  },
});

export default LoggedOut;
