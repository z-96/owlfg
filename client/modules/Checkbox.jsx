import React from "react";

import "css/modules/checkbox";

const Checkbox = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    value: React.PropTypes.any,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.node,
    onChange: React.PropTypes.func,
  },

  render() {
    const isChecked = this.props.checked ? "isChecked" : "";

    return (
      <label className="owcheckbox owform">
        <input
          className="owcheckbox-checkbox"
          type="checkbox"
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          checked={this.props.checked}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
        />
        <span className={`owcheckbox-box ${isChecked}`}>
          <i className={`owcheckbox-box-check ${isChecked}`}>✓</i>
        </span>
        {this.props.label &&
          <span className="owcheckbox-label owform-label">
            {this.props.label}
          </span>
        }
      </label>
    );
  },
});

export default Checkbox;
