import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import initialState from './initialState';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(rootSaga);
	return store;
}
