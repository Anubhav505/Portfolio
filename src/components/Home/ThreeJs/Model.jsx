import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { scene } = useGLTF('/models/lumen.glb');

  return <primitive ref={group} object={scene} {...props} />;
}
