import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css'
import './styles/images.css'
import './styles/no-touch.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
