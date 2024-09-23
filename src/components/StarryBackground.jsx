import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as THREE from 'three';

const StarField = ({ theme }) => {
  const starsRef = useRef();

  useEffect(() => {
    if (starsRef.current) {
      const newColor = theme === 'light' ? new THREE.Color('black') : new THREE.Color('white');
      starsRef.current.material.color = newColor;
    }
  }, [theme]);

  return (
    <Stars
      ref={starsRef}
      radius={70}
      depth={10}
      count={5000}
      factor={4}
      saturation={0}
      fade={true}
    />
  );
};

StarField.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

const StarryBackground = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobi|android|tablet|ipad|iphone/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  // Handle mouse movement for desktop parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth) * 2 - 1, // Normalize to -1 to 1
      y: -(clientY / window.innerHeight) * 2 + 1, // Invert Y axis
    });
  };

  // Handle device orientation effect for mobile devices
  const handleDeviceOrientation = (event) => {
    const beta = event.beta; // front-back tilt in degrees
    const gamma = event.gamma; // left-right tilt in degrees
    const xTilt = gamma / 90; // Normalize to -1 to 1
    const yTilt = beta / 180; // Normalize to -1 to 1
    setTargetRotation({
      x: yTilt * 0.1,
      y: xTilt * 0.1,
    });
  };

  useEffect(() => {
    if (isMobile) {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isMobile && window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <Canvas className="absolute inset-0 z-0 pointer-events-none">
      <StarField theme={theme} />
      <CameraController mousePosition={mousePosition} targetRotation={targetRotation} />
    </Canvas>
  );
};

StarryBackground.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

const CameraController = ({ mousePosition, targetRotation }) => {
  useFrame(({ camera }) => {
    // Apply mouse-based movement for desktops
    camera.position.x = mousePosition.x * 0.2;
    camera.position.y = mousePosition.y * 0.2;

    // Smoothly adjust camera rotation for device tilt
    camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.1;
    camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.1;

    camera.lookAt(0, 0, 0);
  });

  return null;
};

CameraController.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  targetRotation: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default StarryBackground;
