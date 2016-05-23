import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

import Button from "modules/Button";
import Checkbox from "modules/Checkbox";
import Select from "modules/Select";
import Input from "modules/Input";
import HeroSelect from "./HeroSelect";
import { TYPES, TYPE_ORDER } from "shared/profile";
import { ROLES, ROLE_ORDER } from "shared/heroes";
import { REGIONS, REGION_ORDER } from "shared/regions";

import "css/apps/profile/form";

const Form = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    submit: React.PropTypes.func,
  },

  mixins: [PureRenderMixin],

  getInitialState() {
    const { user } = this.props;
    const profile = user.profile || {};
    const defaults = {
      type: null,
      role: null,
      region: null,
      microphone: false,
      heroes: [],
    };

    return {
      ...defaults,
      ...profile,
    };
  },

  _onChange(ev) {
    const change = {};
    if (ev.target.type === "checkbox") {
      change[ev.target.name] = ev.target.checked;
    }
    else {
      change[ev.target.name] = ev.target.value;
    }

    this.setState(change);
  },

  _onHeroChange(heroes) {
    this.setState({ heroes });
  },

  _submit(ev) {
    ev.preventDefault();
    this.props.submit({
      type: this.state.type,
      role: this.state.role,
      microphone: this.state.microphone,
      heroes: this.state.heroes,
    });
  },

  _optionify(lookup, order) {
    return order.map((key) => {
      return {
        name: lookup[key].name,
        value: key,
      };
    });
  },

  render() {
    const { state, props } = this;
    const { user, submit } = props;

    const typeOptions = this._optionify(TYPES, TYPE_ORDER);
    const regionOptions = this._optionify(REGIONS, REGION_ORDER);
    const roleOptions = this._optionify(ROLES, ROLE_ORDER);
    roleOptions.unshift({
      name: "No preference",
      value: null,
    });

    return (
      <form className="profile-form" action="/profile" onSubmit={this._submit}>
        <div>
          <Select
            name="type"
            label="Player type"
            options={typeOptions}
            value={state.type}
            onChange={this._onChange}
          />
          <Select
            name="role"
            label="Preferred role"
            options={roleOptions}
            value={state.role}
            onChange={this._onChange}
          />
          <Select
            name="region"
            label="Region"
            options={regionOptions}
            value={state.region}
            onChange={this._onChange}
          />
          <Checkbox
            name="microphone"
            label="Microphone"
            checked={state.microphone}
            onChange={this._onChange}
          />
        </div>

        <HeroSelect
          heroes={state.heroes}
          onChange={this._onHeroChange}
        />

        <Button type="primary">Save</Button>
      </form>
    );
  },
});

export default Form;
