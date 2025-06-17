import { useRef, useLayoutEffect, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import gsap from 'gsap';
import Model from './Model.jsx';
import { useNavigate } from 'react-router-dom';

function SceneContent({ controlsRef, modelRef, onExplore }) {
  const { camera } = useThree();
  const navigate = useNavigate();

  useFrame(() => {
    controlsRef.current?.update();
  });

  useLayoutEffect(() => {
    const exploreBtn = document.querySelector('.explore');

    if (!exploreBtn) {
      console.warn('No .explore button found');
      return;
    }

    const animateCamera = () => {
      gsap.to(camera.position, {
        x: 0.4,
        y: 0,
        z: 0,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          camera.updateProjectionMatrix();
          controlsRef.current?.update();
        },
        onComplete: () => {
          onExplore?.();
          navigate('/portfolio');
        },
      });
    };

    exploreBtn.addEventListener('click', animateCamera);

    return () => exploreBtn.removeEventListener('click', animateCamera);
  }, [camera, controlsRef, onExplore, navigate]);

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

export default function Scene() {
  const controlsRef = useRef();
  const modelRef = useRef();

  return (
    <div className='w-full h-screen'>
      <Canvas
        camera={{
          position: [1.48, 0.63, 1.29],
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <SceneContent
            controlsRef={controlsRef}
            modelRef={modelRef}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
