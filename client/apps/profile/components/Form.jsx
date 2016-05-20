import React from "react";

import Button from "modules/Button";
import Checkbox from "modules/Checkbox";
import Select from "modules/Select";
import Input from "modules/Input";
import HeroSelect from "./HeroSelect";
import {
  ROLES,
  ROLE_ORDER,
} from "shared/heroes";
import {
  REGIONS,
  REGION_ORDER,
} from "shared/regions";

import "css/apps/profile/form";

const Form = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    submit: React.PropTypes.func,
  },

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

  render() {
    const { state, props } = this;
    const { user, submit } = props;

    const typeOptions = [{
      name: "Competitive",
      value: "competitive",
    }, {
      name: "Casual",
      value: "casual",
    }];

    const roleOptions = ROLE_ORDER.map((role) => {
      return {
        name: ROLES[role].name,
        value: role,
      };
    });
    roleOptions.unshift({
      name: "No preference",
      value: null,
    });

    const regionOptions = REGION_ORDER.map((region) => {
      return {
        name: REGIONS[region].name,
        value: region,
      };
    });

    return (
      <form className="profile-form" action="/profile" onSubmit={this._submit}>
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
