import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';

// var express = require('express')
// var app = express()
// const cors = require("cors");
// app.use(cors());

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();

