import React from 'react';

import { Switch, Router } from 'react-router-dom';

// eslint-disable-next-line
import { createBrowserHistory } from 'history';

import './App.css';
import Routes, {PageRoutes, isAuthenticationRequired} from '../../enumeration/Routes';

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
    history.push()
  }

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {
            Routes()
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
