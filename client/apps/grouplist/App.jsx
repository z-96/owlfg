import React from "react";
import { connect } from "react-redux";

import SidebarCTA from "./components/SidebarCTA";
import ListView from "modules/ListView";
import { fetchGroups } from "ducks/groups";

const GroupList = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    user: React.PropTypes.object,
    groups: React.PropTypes.array,
    myGroup: React.PropTypes.object,
    filters: React.PropTypes.object,
    isFetching: React.PropTypes.bool,
    isEmpty: React.PropTypes.bool,
  },

  getInitialState() {
    return {
      filters: {
        ...this.props.filters,
      },
    };
  },

  componentDidMount() {
    const { groups, isFetching, isEmpty } = this.props;
    if (!groups.length && !isFetching && !isEmpty) {
      this._fetch(true);
    }
  },

  _fetch(reset) {
    this.props.dispatch(fetchGroups(reset, this.state.filters));
  },

  render() {
    const { user, groups, myGroup } = this.props;
    const groupEls = groups.map((group) => {
      return <h3 key={group.id}>{group.name}</h3>;
    });

    const sidebarEls = [];
    sidebarEls.push(<SidebarCTA key="cta" user={user} myGroup={myGroup} />);

    return (
      <div className="grouplist">
        <ListView
          title="Join a Group"
          items={groupEls}
          sidebar={sidebarEls}
        />
      </div>
    );
  },
});

function mapStateToProps(state) {
  const { groups, auth } = state;
  return {
    user: auth.user,
    groups: groups.groups,
    myGroup: groups.myGroup,
    filters: groups.filters,
    isFetching: groups.isFetching,
    isEmpty: groups.isEmpty,
  };
}

export { GroupList as App };
export default connect(mapStateToProps)(GroupList);
