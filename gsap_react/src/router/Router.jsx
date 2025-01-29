import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App1 from '../components/1-1.to/App';
import App2 from '../components/1-2.from/App';

export default function router() {
  return (
    <Routes>
      <Route path='/to' element={<App1 />} />
      <Route path='/from' element={<App2 />} />
    </Routes>
  );
}
