import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const DualStarField = ({ theme, scrollOffset }) => {
  const whiteStarsRef = useRef();
  const blackStarsRef = useRef();
  const groupRef = useRef();
  const isMobile = window.innerWidth < 768;
  
  useFrame(() => {
    if (groupRef.current) {
      const offset = scrollOffset * 0.001; // Adjust speed
      groupRef.current.position.x = offset;
      groupRef.current.position.y = -offset;
    }
  });
  
  // Set smaller radius and depth for mobile devices
  const radius = isMobile ? 50 : 100;
  const depth = isMobile ? 5 : 10;

  // Define base configurations for both star fields
  const baseConfig = {
    radius,
    depth,
    count: 5000,
    factor: 4,
    saturation: 0,
    fade: false,
  };

  // Specific configs for each star type
  const whiteStarConfig = {
    ...baseConfig,
    fade: true,
  };

  const blackStarConfig = {
    ...baseConfig,
    // Increase count and factor for better visibility
    count: 6000,
    factor: 5,
    fade: false, // Disable fade for better contrast
  };

  return (
    <group>
      {/* White stars - visible in dark mode */}
      <Stars
        ref={whiteStarsRef}
        {...whiteStarConfig}
        color="white"
        opacity={theme === 'dark' ? 1 : 0}
        transparent={true}
      />
      
      {/* Dark stars - visible in light mode */}
      <Stars
        ref={blackStarsRef}
        {...blackStarConfig}
        color="#171717" // Very dark gray instead of pure black
        position={[0, 0, 0.1]}
        opacity={theme === 'light' ? 0.8 : 0} // Slightly reduced opacity
        transparent={true}
      />

      {/* Additional layer of darker stars for better depth */}
      {theme === 'light' && (
        <Stars
          {...blackStarConfig}
          color="#111111" // Slightly lighter dark gray
          position={[0, 0, 0.2]}
          opacity={0.5}
          transparent={true}
          count={4000} // Fewer stars in this layer
        />
      )}
    </group>
  );
};

DualStarField.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  scrollOffset: PropTypes.number,
  
};


const StarryBackground = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    setScrollOffset(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobi|android|tablet|ipad|iphone/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1,
    });
  };

  const handleDeviceOrientation = (event) => {
    const beta = event.beta;
    const gamma = event.gamma;
    const xTilt = gamma / 90;
    const yTilt = beta / 180;
    setTargetRotation({
      x: yTilt * 0.1,
      y: xTilt * 0.1,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <DualStarField theme={theme} scrollOffset={scrollOffset}/>
      <CameraController mousePosition={mousePosition} targetRotation={targetRotation} />
    </Canvas>
  );
};

StarryBackground.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

const CameraController = ({ mousePosition, targetRotation }) => {
  useFrame(({ camera }) => {
    camera.position.x = mousePosition.x * 0.2;
    camera.position.y = mousePosition.y * 0.2;
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