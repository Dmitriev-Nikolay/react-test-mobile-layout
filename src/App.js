import React, { Suspense } from 'react';

import { Header } from './components';

const Home = React.lazy(() => import('./pages/Home'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense
        fallback=
        {
          <div className="loader-block">
            <p className="loader-block__text">Загрузка контента...</p>
            <span className="loader-block__loading"></span>
          </div>
        }
      >
        <Home />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;