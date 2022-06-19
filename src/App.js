import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';



  const Home = lazy(() => import('./Home'));
  const Market = lazy(() => import('./Market'));
  const Download = lazy(() => import('./Download'));
  const Api = lazy(() => import('./Api'));


 

  const App = () => (
  <Router>

    <Suspense fallback={<div>Loading...</div>}>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Market" element={<Market />} />
      <Route path="Download" element={<Download />} />
      <Route path="Api" element={<Api />} />
      

  </Routes>
  </Suspense>
</Router>

);
export default App;