import React from "react";

import "css/modules/listview";

const ListView = React.createClass({
  propTypes: {
    title: React.PropTypes.node,
    items: React.PropTypes.array,
    sidebar: React.PropTypes.node,
  },

  render() {
    const { title, items, sidebar } = this.props;

    return (
      <div className="listview">
        <div className="listview-title">
          {title}
        </div>
        <div className="listview-list">
          {items}
        </div>
        <div className="listview-sidebar">
          {sidebar}
        </div>
      </div>
    );
  },
});

export default ListView;
