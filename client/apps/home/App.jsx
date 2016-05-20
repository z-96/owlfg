import React from "react";
import { connect } from "react-redux";

import { authenticate } from "ducks/auth";
import LoggedOut from "./components/LoggedOut";
import Splash from "./components/Splash";

const Home = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    user: React.PropTypes.object,
    isAuthenticating: React.PropTypes.bool,
  },

  _authenticate() {
    this.props.dispatch(authenticate());
  },

  render() {
    let content = "";
    if (this.props.user) {
      content = <Splash user={this.props.user} />;
    }
    else {
      content = <LoggedOut authenticate={this._authenticate} />;
    }

    return (
      <div className="home">
        {content}
      </div>
    );
  },
});

function mapStateToProps(state) {
  const { auth } = state;
  return {
    user: auth.user,
    isAuthenticating: auth.isAuthenticating,
  };
}

export { Home as App };
export default connect(mapStateToProps)(Home);
