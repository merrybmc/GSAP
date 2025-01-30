import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App1 from '../components/chapter1/1-1.to/App';
import App2 from '../components/chapter1/1-2.from/App';
import App3 from '../components/chapter1/1-3.stagger/App';
import App4 from '../components/chapter1/1-4.tweenControl/App';

export default function router() {
  return (
    <Routes>
      <Route path='/to' element={<App1 />} />
      <Route path='/from' element={<App2 />} />
      <Route path='/stagger' element={<App3 />} />
      <Route path='/twinControl' element={<App4 />} />
    </Routes>
  );
}
