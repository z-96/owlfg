import React from "react";

import "css/modules/select";

const Select = React.createClass({
  propTypes: {
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.node,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.node,
  },

  render() {
    let value = this.props.value;
    let active = this.props.options.reduce((previous, option) => {
      const display = option.value === value ? option.name : false;
      return previous || display;
    }, false);

    if (value === null) {
      value = "";
    }
    if (!active) {
      active = this.props.options[0].name;
    }

    return (
      <label className="owselect owform">
        <span className="owselect-label owform-label">
          {this.props.label}
        </span>
        <span className="owselect-active">
          {active}
        </span>
        <select
          className="owselect-select"
          disabled={this.props.disabled}
          name={this.props.name}
          onChange={this.props.onChange}
          value={value}
        >
          {this.props.options.map((option, i) => {
            return (
              <option value={option.value} key={i}>
                {option.name}
              </option>
            );
          })}
        </select>
      </label>
    );
  },
});

export default Select;
