import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabComponent from './components/TabComponent';
import PropertyListing from './components/PropertyListing';
import PropertyDetail from './components/PropertyDetail';

const App = () => {
  return (
    <Router basename="/RentMyHouse">
      <Routes>
        <Route path="/" element={<TabComponent />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

