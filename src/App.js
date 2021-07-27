import React from 'react';

import { Header, Footer } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;