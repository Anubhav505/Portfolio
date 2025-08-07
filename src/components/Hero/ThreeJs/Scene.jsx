import { useRef, useLayoutEffect, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Model from './Model.jsx';

gsap.registerPlugin(ScrollTrigger);

function SceneContent({ controlsRef, modelRef, triggerRef, onNavigate }) {
  const { camera } = useThree();

  useFrame(() => {
    controlsRef.current?.update();
  });

  useLayoutEffect(() => {
    const anim = gsap.to(camera.position, {
      x: 0.4,
      y: 0,
      z: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: 'center 10%',
        scrub: true,
        pin: true,
        onUpdate: () => {
          camera.updateProjectionMatrix();
          controlsRef.current?.update();
        },
        onLeave: () => {
          onNavigate();
        },
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [camera, controlsRef, triggerRef, onNavigate]);

  return (
    <>
      <Stage intensity={1} environment="night" adjustCamera={false}>
        <Model ref={modelRef} />
      </Stage>

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </>
  );
}

export default function Scene({ triggerRef, onNavigate }) {
  const controlsRef = useRef();
  const modelRef = useRef();

  return (
    <div className='z-10 w-full h-screen'>
      <Canvas camera={{ position: [1.48, 0.63, 1.29], fov: 30, }} >
        <Suspense fallback={null}>
          <SceneContent
            controlsRef={controlsRef}
            modelRef={modelRef}
            triggerRef={triggerRef}
            onNavigate={onNavigate}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
