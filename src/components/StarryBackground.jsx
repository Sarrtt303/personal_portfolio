import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarryBackground = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const starColor = theme === 'light' ? '#000000' : '#ffffff';  // Black stars for light mode, white for dark mode

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth) * 2 - 1,  // Normalize to -1 to 1
      y: -(clientY / window.innerHeight) * 2 + 1  // Invert Y axis
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Camera controller to apply parallax movement
const CameraController = ({ mousePosition }) => {
  useFrame(({ camera }) => {
    camera.position.x = mousePosition.x * 0.2;  // Adjust for more or less movement
    camera.position.y = mousePosition.y * 0.2;  // Adjust for more or less movement
    camera.lookAt(0, 0, 0);
  });
  return null;
};

  return (
    <Canvas className="absolute inset-0 z-0 pointer-events-none">
      <Stars 
        radius={50} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade={true}
        speed={1} 
        color={starColor}  // Dynamic color based on theme
      />
      {/* Update camera position based on mouse movement */}
      <CameraController mousePosition={mousePosition} />
    </Canvas>
  );
};

StarryBackground.propTypes = {
  theme: PropTypes.string.isRequired,  
};

export default StarryBackground;