import React, { Suspense } from 'react';

import { Header } from './components';
import { Home } from './pages';

const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Suspense fallback={ <div>Загрузка...</div> }>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;