import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Dog from './color'; // Import Dog component

export default function Render() {
  const [color, setColor] = useState('silver'); // Default color
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Simulate loading time (replace with actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timeout as needed
  }, []);

  return (
    <div className="example glass flex flex-col rounded-2xl shadow-2xl">
      <h1 className="font-bold text-white items-center md:text-2xl text-sm">Preview</h1>
      {isLoading ? (
        // Show loading indicator while content is loading
        <div className="loading-indicator">
          {/* Customize loading indicator here (e.g., spinner, text) */}
          Loading...
        </div>
      ) : (
        <Canvas camera={{ position: [0, 20, 10], fov: 25 }}>
          <ambientLight intensity={20} />
          <Dog position={[-0.1, -0.2, 0]} scale={20} color={color} />
          <Environment preset="city" />
          <OrbitControls />
        </Canvas>
      )}

      {/* Buttons to change color */}
      <div
        style={{ marginTop: '20px', zIndex: '2', padding: '10px' }}
        className=" text-black text-sm md:text-xl flex gap-8 justify-center  "
      >
        <button
          className=" rounded-xl p-2 font-bold bg-[#ffe24f]"
          onClick={() => setColor('gold')}
        >
          Gold
        </button>
        <button
          className=" rounded-xl p-2 font-bold bg-[#656565] "
          onClick={() => setColor('silver')}
        >
          Silver
        </button>
        <button
          className="  rounded-xl p-2 font-bold bg-[#b76e79]"
          onClick={() => setColor('rosegold')}
        >
          Rose
        </button>
      </div>
    </div>
  );
}
