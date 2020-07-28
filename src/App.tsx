import * as React from 'react';

/* Component */
import AppLayout from './containers/AppLayout';
import BaseRoute from './routes'

// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SuspenseLoader from './views/SuspenseLoader';
// import './styles/App.css';

export default function App() {
  return (
    <React.Suspense fallback={<SuspenseLoader />}>
      <AppLayout>
        <BaseRoute  />
      </AppLayout>
    </React.Suspense>
  );
};
