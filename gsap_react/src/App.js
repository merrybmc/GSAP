import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Router from './router/Router.jsx';
function App() {
  // const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to('h1', { x: 400 });
  //   },
  //   { scope: container }
  // );

  return (
    <>
      <Router />
      {/* <div ref={container}><h1>hello world</h1></div> */}
    </>
  );
}

export default App;
