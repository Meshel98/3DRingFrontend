import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';

function Dog({ color, ...props }) {
  const ref = useRef();
  const { scene } = useGLTF('/ring.glb'); // Load the GLTF model

  const bind = useDrag(({ offset: [x, y], down }) => {
    ref.current.userData.isDragging = down;
    if (down) {
      ref.current.rotation.x = y * 0.012;
      ref.current.rotation.y = x * 0.021;
    }
  }, { pointerEvents: true });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Set color based on the prop
        switch (color) {
          case 'gold':
            child.material.color.set('gold');
            break;
          case 'silver':
            child.material.color.set('silver');
            break;
          case 'rosegold':
            child.material.color.set('#b76e79'); // Hex code for rose gold
            break;
          default:
            child.material.color.set('silver'); // Default color
        }
      }
    });
  }, [color, scene]);

  useFrame(() => {
    if (ref.current && !ref.current.userData.isDragging) {
      ref.current.rotation.y += 0.001; // Slower automatic rotation
      ref.current.rotation.x += 0.001;
    }
  });

  return <primitive object={scene} ref={ref} {...props} {...bind()} />;
}

export default Dog;
