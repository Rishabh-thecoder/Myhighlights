import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import DataDisplay from './DataDisplay';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/:id" element={<DataDisplay />} />
        {/* <Route path="/api/videos/:id" element={<Hello/>} /> */}       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
