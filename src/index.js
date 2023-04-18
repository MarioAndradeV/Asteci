import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherTable from './components/WeatherTable';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
     <WeatherTable />
  </Provider>
);

// ReactDOM.createRoot(
//   <Provider store ={store}>
//      <WeatherTable />
//   </Provider>,
//   document.getElementById('root')
// )


reportWebVitals();
