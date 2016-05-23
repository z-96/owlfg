import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

import {
  HEROES,
  HERO_ORDER,
  HERO_LIMIT,
  getPortrait,
} from "shared/heroes";

import "css/apps/profile/heroselect";

const HeroSelect = React.createClass({
  propTypes: {
    heroes: React.PropTypes.array,
    onChange: React.PropTypes.func,
  },

  mixins: [PureRenderMixin],

  _onClick(ev) {
    const hero = ev.currentTarget.getAttribute("data-hero");
    const heroes = this.props.heroes.slice(0);
    if (heroes.indexOf(hero) !== -1) {
      heroes.splice(heroes.indexOf(hero), 1);
    }
    else {
      heroes.push(hero);
    }
    this.props.onChange(heroes.slice(0, HERO_LIMIT));
  },

  render() {
    const { heroes } = this.props;

    return (
      <div className="heroselect">
        <div className="heroselect-title">
          Choose up to 3 of your favorite heroes
        </div>

        {HERO_ORDER.map((hero) => {
          const isActive = heroes.indexOf(hero) !== -1 ? "isActive" : "";
          const style = {
            backgroundImage: `url(${getPortrait(hero)})`,
          };
          return (
            <div
              key={hero}
              data-hero={hero}
              className={`heroselect-hero ${isActive}`}
              onClick={this._onClick}
            >
              <div
                className="heroselect-hero-portrait"
                style={style}
              />
              <div className="heroselect-hero-name">
                {HEROES[hero].name}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
});

export default HeroSelect;
