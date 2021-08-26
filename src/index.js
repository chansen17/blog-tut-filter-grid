import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle} from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`

  body, html {
    background: #355C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-repeat: no-repeat;
    font-family: 'Open Sans', Arial, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;

ReactDOM.render(  
  <React.StrictMode>
    <GlobalStyles theme={GlobalStyles}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
