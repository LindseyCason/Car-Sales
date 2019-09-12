import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import 'bulma/css/bulma.css';
import './styles.scss';

import rootReducer from "./reducer/myReducer"

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

//reducer added with state info from App.js, moved over into reducer function