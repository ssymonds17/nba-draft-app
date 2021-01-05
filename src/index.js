import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import History from './pages/history/History';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Route exact path='/' render={() => <App />} />
        <Route path='/history' render={() => <History />} />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
