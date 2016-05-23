import React from "react";
import { Link } from "react-router";

import Button from "modules/Button";

import "css/apps/home/splash";

const Splash = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <div className="home-splash">
        <h2 className="home-splash-title">
          Welcome, {this.props.user.name}
        </h2>

        <div className="home-splash-links">
          <Button to="/groups" className="home-splash-links-link">
            Find a Group
          </Button>
          <Button to="/groups/new" className="home-splash-links-link">
            Start a Group
          </Button>
          <Button to="/profile" className="home-splash-links-link">
            Edit Profile
          </Button>
        </div>
      </div>
    );
  },
});

export default Splash;
