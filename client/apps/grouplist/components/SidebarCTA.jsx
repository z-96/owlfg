import React from "react";

import Button from "modules/Button";

const SidebarCTA = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    myGroup: React.PropTypes.object,
  },

  render() {
    const { user, myGroup } = this.props;

    let button = "";
    if (!user) {
      button = (
        <Button type="primary" to="/">Sign in to Get Started</Button>
      );
    }
    else if (!user.profile) {
      button = (
        <Button type="primary" to="/profile">Fill Out Your Profile</Button>
      );
    }
    else if (myGroup) {
      button = (
        <Button to={`/groups/${myGroup.id}`}>Go to My Group</Button>
      );
    }
    else {
      button = (
        <Button to="/groups/new">Create a Group</Button>
      );
    }

    return button;
  },
});

export default SidebarCTA;
