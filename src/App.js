import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Template1Home from './template1/index';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template1Home />} />
        <Route path="/:businessId/" element={<Template1Home />} />
      </Routes>
    </Router>
  );
}

export default App;
