import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.sass';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

// import { createStore } from 'redux';

// const reduser = (state = [], action) => {
// 	switch (action.type) {
// 		case 'ADD': return [ ...state, action.data ];
// 		default: return state;
// 	}
// }

// const store = createStore(reduser);

// store.subscribe(() => console.log(`State:`, store.getState()));

// store.dispatch({ type: 'ADD', data: {title: 'test'} });