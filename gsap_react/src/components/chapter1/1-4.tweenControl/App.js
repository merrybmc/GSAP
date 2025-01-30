import React, { useRef } from 'react';
import './style.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function App() {
  const container = useRef();

  const boxRef = useRef();
  const tweenRef = useRef();

  useGSAP(
    () => {
      tweenRef.current = gsap.to(boxRef.current, {
        x: 500,
        //  paused: true
      });
      tweenRef.current.pause();
    },
    { scope: container }
  );

  const onControlBox = (control) => {
    control === 'play' && tweenRef.current.play();
    control === 'pause' && tweenRef.current.pause();
    control === 'resume' && tweenRef.current.resume();
    control === 'reverse' && tweenRef.current.reverse();
    control === 'restart' && tweenRef.current.restart();
  };

  return (
    <div ref={container}>
      <div ref={boxRef} className='orange'></div>

      <button
        onClick={() => {
          onControlBox('play');
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          onControlBox('pause');
        }}
      >
        pause
      </button>
      <button
        onClick={() => {
          onControlBox('resume');
        }}
      >
        resume
      </button>
      <button
        onClick={() => {
          onControlBox('reverse');
        }}
      >
        reverse
      </button>
      <button
        onClick={() => {
          onControlBox('restart');
        }}
      >
        restart
      </button>
    </div>
  );
}
