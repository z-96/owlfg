import React from "react";
import { Route, IndexRoute } from "react-router";

import Template from "template/App";
import Home from "apps/home/App";
import Profile from "apps/profile/App";
import GroupList from "apps/grouplist/App";
import TeamList from "apps/teamlist/App";
import PlayerList from "apps/playerlist/App";
import About from "apps/about/App";
import Legal from "apps/legal/App";
import Contact from "apps/contact/App";

const Routes = React.createClass({
  render() {
    return (
      <Route path="/" component={Template}>
        <IndexRoute component={Home} />
        <Route path="profile" component={Profile} />
        <Route path="groups" component={GroupList} />
        <Route path="teams" component={TeamList} />
        <Route path="players" component={PlayerList} />
        <Route path="about" component={About} />
        <Route path="legal" component={Legal} />
        <Route path="contact" component={Contact} />
      </Route>
    );
  },
});

export default Routes;
