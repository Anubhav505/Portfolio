import { useRef, useLayoutEffect, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Model from './Model.jsx';

gsap.registerPlugin(ScrollTrigger);

function SceneContent({ controlsRef, modelRef, triggerRef, onNavigate, onModelLoaded }) {
  const { camera } = useThree();
  const { progress, active } = useProgress();
  const hasRenderedRef = useRef(false);

  useFrame(() => {
    controlsRef.current?.update();
  });

  // Log only once when model is fully loaded
  useLayoutEffect(() => {
    if (!hasRenderedRef.current && modelRef.current && !active && progress === 100) {
      console.log('✅ Model is fully loaded and rendered on screen');
      hasRenderedRef.current = true;
      if (onModelLoaded) onModelLoaded();
    }
  }, [modelRef, active, progress, onModelLoaded]);

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

export default function Scene({ triggerRef, onNavigate, onModelLoaded }) {
  const controlsRef = useRef();
  const modelRef = useRef();

  return (
    <div className='z-10 w-full h-screen'>
      <Canvas camera={{ position: [1.48, 0.63, 1.29], fov: 30 }}>
        <Suspense fallback={null}>
          <SceneContent
            controlsRef={controlsRef}
            modelRef={modelRef}
            triggerRef={triggerRef}
            onNavigate={onNavigate}
            onModelLoaded={onModelLoaded}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}