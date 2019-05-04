import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/globalStyle';

const AppWithStyle = () => (
  <>
  <GlobalStyle />
  <App />
  </>
)

ReactDOM.render( <AppWithStyle/>, document.getElementById('root'));