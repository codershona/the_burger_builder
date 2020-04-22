import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware,  compose, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import thunk from 'redux-thunk';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

import createSagaMiddleware from 'redux-saga';

import { logoutSaga } from './store/sagas/auth';




const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	order: orderReducer,
	auth: authReducer
});



// Saga : Hooking the saga up to the store and actions :

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk, sagaMiddleware)

));


// Using my saga middleware :

// sagaMiddleware.run(logoutSaga);
 sagaMiddleware.run(logoutSaga);



const app = (
	<Provider store={store}>
	<BrowserRouter>
	  <App />
	</BrowserRouter>
	</Provider>
);


ReactDOM.render( app, document.getElementById('root'));

registerServiceWorker();
