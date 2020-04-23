import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Component
 */
import AppLayout from './containers/AppLayout'
import BaseRoute from './routes'

// CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SuspenseLoader from './views/SuspenseLoader';
import { setComponentsPage, setPages } from './redux/action/actionCreators';
// import './styles/App.css';


export default function App(props) {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <AppLayout>
          <BaseRoute  />
        </AppLayout>
      </Suspense>
    </Router>
  );
};
