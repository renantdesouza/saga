import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import initialState from './initialState';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(sagaMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f // add support for Redux dev tools
		)
	);
	sagaMiddleware.run(rootSaga);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducer', () => (
			 // eslint-disable-line global-require
			store.replaceReducer(require('../reducer').default)
		));
	}

	return store;
}
