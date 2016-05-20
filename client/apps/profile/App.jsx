import React from "react";
import { connect } from "react-redux";


import Intro from "./components/Intro";
import Form from "./components/Form";
import { update } from "ducks/auth";

const Profile = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    user: React.PropTypes.object,
  },

  _update(profile) {
    this.props.dispatch(update(profile));
  },

  render() {
    const { user } = this.props;

    return (
      <div className="profile">
        <Intro user={user} />
        <Form user={user} submit={this._update} />
      </div>
    );
  },
});

function mapStateToProps(state) {
  const { auth } = state;
  return {
    user: auth.user,
  };
}

export { Profile as App };
export default connect(mapStateToProps)(Profile);
