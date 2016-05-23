// Load order is important for this CSS, base styles need to come before
// all other, and the imports below will add new styles.
import "css/base";

import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import perflogger from "redux-perf-middleware";

import reducers from "ducks/index";
import Template from "template/App";
import Home from "apps/home/App";
import Profile from "apps/profile/App";
import GroupList from "apps/grouplist/App";
import TeamList from "apps/teamlist/App";
import PlayerList from "apps/playerlist/App";
import About from "apps/about/App";
import Legal from "apps/legal/App";
import Contact from "apps/contact/App";

const store = createStore(reducers,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(perflogger),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
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
    </Router>
  </Provider>,
  document.getElementById("root")
);
