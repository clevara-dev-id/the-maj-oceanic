import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ApplicationLayout from './views/ApplicationLayout';
import BaseRoute from './routes';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ApplicationLayout>
              <BaseRoute />
          </ApplicationLayout>
        </Suspense>
      </Router>
    );
  };
};

export default App;
