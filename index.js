import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  //StrictMode est un outil pour détecter les problèmes potentiels durant le développement et n'impactent pas sur la version utilisé en production 

    <React.StrictMode> 
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );