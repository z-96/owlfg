import React from "react";

const Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.node,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,

    successMessage: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
  },

  render() {
    return (
      <label className="owinput owform">
        {this.props.label &&
          <span className="owinput-label owform-label">
            {this.props.label}
          </span>
        }
        <input
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
      </label>
    );
  },
});

export default Input;
