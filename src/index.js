import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './theme/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const AppBrowserStyle = () => (
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
)

ReactDOM.render( <AppBrowserStyle/>, document.getElementById('root'));