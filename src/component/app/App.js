import React from 'react';

import { Switch, Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Routes, {PageRoutes, isAuthenticationRequired} from '../../enumeration/Routes';
import Loading from "../loading";
import {connect} from "react-redux";

const history = createBrowserHistory();

function App({ isAuthenticated }) {
	console.log('isAuthenticated', isAuthenticated);

  const path = history.location.pathname;

  if (isAuthenticationRequired(path) && !isAuthenticated && path !== PageRoutes.LOGIN.path) {
    history.push(PageRoutes.LOGIN.path);
  }

  if ((!isAuthenticationRequired(path) || isAuthenticated) && path !== PageRoutes.LOGIN.path) {
    history.push(path);
  }

  if (isAuthenticated && path === PageRoutes.LOGIN.path) {
  	console.log('foi');
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

const mapStateToProps = (state) => ({
	isAuthenticated: state.user && state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(App);
