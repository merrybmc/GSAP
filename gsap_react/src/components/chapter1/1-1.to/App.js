import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to('.orange', {
        x: 300,
        y: 300,
        scale: 2,
        rotation: 360,
        duration: 3,
        skewX: 50,
        skewY: 100,
        xPercent: 200,
        yPercent: 200,
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div className='orange' />
    </div>
  );
}
