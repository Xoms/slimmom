import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import  {store, persistor}  from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react'



import App from './App';
import reportWebVitals from './reportWebVitals';

import './fonts/VerdanaBold.woff2';
import './fonts/verdana.woff2';
import './fonts/GothamPro-Light.woff';
import './fonts/GothamPro-Bold.woff';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate>
    </Provider> */}
  </BrowserRouter>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
