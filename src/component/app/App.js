import React from 'react';

import { Switch, Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Routes, {PageRoutes, isAuthenticationRequired} from '../../enumeration/Routes';
import Loading from "../loading";
import Snackbar from '../snackbar';
import {connect} from "react-redux";
import {hideMessage, showMessage} from "../../action/feedbackAction";

const history = createBrowserHistory();

function App({ isAuthenticated }) {

  const path = history.location.pathname;

  if (isAuthenticationRequired(path) && !isAuthenticated && path !== PageRoutes.LOGIN.path) {
    history.push(PageRoutes.LOGIN.path);
  }

  if ((!isAuthenticationRequired(path) || isAuthenticated) && path !== PageRoutes.LOGIN.path) {
    history.push(path);
  }

  if (isAuthenticated && path === PageRoutes.LOGIN.path) {
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
      <Snackbar/>
    </div>
  );
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.user && state.user.isAuthenticated,
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  showMessage: showMessage(dispatch),
  hideMessage: hideMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
