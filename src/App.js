import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * Component
 */
import AppLayout from './containers/AppLayout';
import BaseRoute from './routes';

// CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './styles/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppLayout>
            <BaseRoute />
          </AppLayout>
        </Suspense>
      </Router>
    );
  };
};

export default App;
