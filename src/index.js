import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/globalStyle';
import { BrowserRouter } from 'react-router-dom';

const AppWithStyle = () => (
  <BrowserRouter>
  <GlobalStyle />
  <App />
  </BrowserRouter>
)

ReactDOM.render( <AppWithStyle/>, document.getElementById('root'));