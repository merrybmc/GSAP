import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import './style.css';
import gsap from 'gsap';

export default function App() {
  const container = useRef();

  useGSAP(
    () => {
      //   gsap.from('.orange', { x: 100, y: 200 });

      gsap.fromTo(
        '.orange',
        { x: 100, y: 200, scale: 1, opacity: 0, duration: 0 },
        { x: 300, y: 400, scale: 3, opacity: 1, duration: 3 }
      );
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div className='orange'></div>
    </div>
  );
}
