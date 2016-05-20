import React from "react";

const Intro = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
  },

  render() {
    const { user } = this.props;

    return (
      <div className="profile-intro">
        <h3 className="profile-intro-title">
          Welcome, {user.name}
        </h3>
        <p className="profile-intro-body">
          Thanks for joining Overwatch LFG! Before we can show you other
          teams and players, we'll need to get some info about what kind
          of player you are.
        </p>
      </div>
    );
  },
});

export default Intro;
