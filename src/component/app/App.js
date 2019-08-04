import React from 'react';

import { Switch, Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Routes, {PageRoutes, isAuthenticationRequired} from '../../enumeration/Routes';
import Loading from "../loading";

const history = createBrowserHistory();

function App({ isAuthenticated }) {
  const path = history.location.pathname;

  if (isAuthenticationRequired(path) && !isAuthenticated && path !== PageRoutes.LOGIN.path) {
    history.push(PageRoutes.LOGIN.path);
  }

  if ((!isAuthenticationRequired(path) || isAuthenticated) && path !== PageRoutes.LOGIN.path) {
    history.push(path);
  }

  if (isAuthenticated && PageRoutes === PageRoutes.LOGIN.path) {
    history.push(PageRoutes.PLATE.path)
  }

  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          {
            Routes()
          }
        </Switch>
      </Router>
      <Loading />
    </div>
  );
}

export default App;
