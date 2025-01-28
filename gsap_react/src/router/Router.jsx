import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../components/1-1.basicTween/App';

export default function router() {
  return (
    <Routes>
      <Route path='/basictween' element={<App />} />
    </Routes>
  );
}
