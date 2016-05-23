import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "css/template/app";

const Template = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    user: React.PropTypes.object,
  },

  render() {
    const { user } = this.props;

    return (
      <div className="owlfg">
        <Header user={user} />
        <div className="owlfg-content">
          {this.props.children}
        </div>
        <Footer />
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

export { Template as App };
export default connect(mapStateToProps)(Template);
