import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const DualStarField = ({ theme, scrollOffset, gyroscopeShift }) => {
  const whiteStarsRef = useRef();
  const blackStarsRef = useRef();
  const groupRef = useRef(); // This ref will be used
  const isMobile = window.innerWidth < 768;
  
  useFrame(() => {
    if (groupRef.current) {
      const offset = scrollOffset * 0.001; // Adjust speed
      groupRef.current.position.x = offset + (gyroscopeShift?.x || 0);
      groupRef.current.position.y = -offset + (gyroscopeShift?.y || 0);
    }
  });
  
  // Set smaller radius and depth for mobile devices
  const radius = isMobile ? 200 : 150;
  const depth = isMobile ? 20 : 15;

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
    count: 6000,
    factor: 5,
    fade: false,
  };

  return (
    <group ref={groupRef}> {/* Added ref here */}
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
        color="#171717"
        position={[0, 0, 0.1]}
        opacity={theme === 'light' ? 0.8 : 0}
        transparent={true}
      />

      {/* Additional layer of darker stars for better depth */}
      {theme === 'light' && (
        <Stars
          {...blackStarConfig}
          color="#111111"
          position={[0, 0, 0.2]}
          opacity={0.5}
          transparent={true}
          count={4000}
        />
      )}
    </group>
  );
};

DualStarField.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  scrollOffset: PropTypes.number,
  gyroscopeShift: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StarryBackground = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [gyroscopeShift, setGyroscopeShift] = useState({ x: 0, y: 0 });
  const [permissionGranted, setPermissionGranted] = useState(false);

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
    console.log('Device orientation event:', { beta: event.beta, gamma: event.gamma }); // Debug log
    
    const beta = event.beta || 0;  // Add fallback
    const gamma = event.gamma || 0; // Add fallback
    
    const xTilt = gamma / 90;
    const yTilt = beta / 180;
    
    setTargetRotation({
      x: yTilt * 0.1,
      y: xTilt * 0.1,
    });
    
    setGyroscopeShift({
      x: xTilt * 2,
      y: yTilt * 2,
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
    const requestPermissionAndSetup = async () => {
      try {
        // Check if we're on iOS and need permission
        if (
          typeof DeviceOrientationEvent !== 'undefined' &&
          typeof DeviceOrientationEvent.requestPermission === 'function'
        ) {
          console.log('Requesting iOS permission...');
          const permissionState = await DeviceOrientationEvent.requestPermission();
          console.log('Permission state:', permissionState);
          
          if (permissionState === 'granted') {
            setPermissionGranted(true);
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          } else {
            console.warn('Gyroscope permission denied:', permissionState);
          }
        } else {
          // Non-iOS: no permission required
          console.log('Adding deviceorientation listener (non-iOS)...');
          window.addEventListener('deviceorientation', handleDeviceOrientation);
          setPermissionGranted(true);
        }
      } catch (err) {
        console.error('DeviceOrientation error:', err);
      }
    };

    const handleFirstInteraction = () => {
      console.log('First interaction detected');
      if (isMobile && !permissionGranted) {
        requestPermissionAndSetup();
      }
    };

    if (isMobile) {
      // Add multiple event listeners for better coverage
      window.addEventListener('touchstart', handleFirstInteraction, { once: true });
      window.addEventListener('click', handleFirstInteraction, { once: true });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, [isMobile, permissionGranted]);

  return (
    <Canvas className="absolute inset-0 z-0 pointer-events-none scale-110 md:scale-100 origin-center">
      <DualStarField theme={theme} scrollOffset={scrollOffset} gyroscopeShift={gyroscopeShift}/>
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

DualStarField.defaultProps = {
  scrollOffset: 0,
  gyroscopeShift: { x: 0, y: 0 },
};

export default StarryBackground;