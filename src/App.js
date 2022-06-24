import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';



  const Home = lazy(() => import('./Home'));
  const Market = lazy(() => import('./Market'));
  const Download = lazy(() => import('./Download'));
  const Api1 = lazy(() => import('./Api1'));


 

  const App = () => (
  <Router>

    <Suspense fallback={<div>Loading...</div>}>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Market" element={<Market />} />
      <Route path="Download" element={<Download />} />
      <Route path="Api1" element={<Api1 />} />

      

  </Routes>
  </Suspense>
</Router>

);
export default App;