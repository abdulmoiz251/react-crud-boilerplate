import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './components/App/App';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <App attr1='passed-to-component' />
  </BrowserRouter>,
  document.getElementById("root")
);
