import React, { Suspense } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

/* Component */
import AppLayout from './containers/AppLayout'
import BaseRoute from './routes'

// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SuspenseLoader from './views/SuspenseLoader';
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
