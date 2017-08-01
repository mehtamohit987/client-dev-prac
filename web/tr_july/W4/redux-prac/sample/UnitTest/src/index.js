import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheckboxWithLabel from "./CheckboxWithLabel.js"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CheckboxWithLabel />, document.getElementById('root'));
registerServiceWorker();
