import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DualStarField = ({ theme, scrollOffset, gyroscopeShift, isMobile }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const offset = scrollOffset * 0.001;
      groupRef.current.position.x = offset + (gyroscopeShift?.x || 0);
      groupRef.current.position.y = -offset + (gyroscopeShift?.y || 0);
    }
  });

  const radius = isMobile ? 200 : 150;
  const depth = isMobile ? 20 : 15;

  const baseConfig = {
    radius,
    depth,
    count: 5000,
    factor: 4,
    saturation: 0,
    fade: false,
  };

  return (
    <group ref={groupRef}>
      <Stars {...baseConfig} fade color="white" opacity={theme === "dark" ? 1 : 0} transparent />
      <Stars {...{ ...baseConfig, count: 6000, factor: 5 }} color="#171717" opacity={theme === "light" ? 0.8 : 0} transparent />
      {theme === "light" && (
        <Stars {...{ ...baseConfig, count: 4000 }} color="#111111" position={[0, 0, 0.2]} opacity={0.5} transparent />
      )}
    </group>
  );
};

DualStarField.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  scrollOffset: PropTypes.number,
  gyroscopeShift: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  isMobile: PropTypes.bool.isRequired,
};

DualStarField.defaultProps = {
  scrollOffset: 0,
  gyroscopeShift: { x: 0, y: 0 },
};

const StarryBackground = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [gyroscopeShift, setGyroscopeShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  };

  const smoothGyro = (prev, next) => prev + (next - prev) * 0.1;

  const handleDeviceOrientation = (event) => {
    const beta = event.beta || 0;
    const gamma = event.gamma || 0;

    const xTilt = gamma / 90;
    const yTilt = beta / 180;

    setTargetRotation((prev) => ({
      x: smoothGyro(prev.x, yTilt * 0.1),
      y: smoothGyro(prev.y, xTilt * 0.1),
    }));

    setGyroscopeShift((prev) => ({
      x: smoothGyro(prev.x, xTilt * 2),
      y: smoothGyro(prev.y, yTilt * 2),
    }));
  };

  useEffect(() => {
    const requestPermissionAndSetup = async () => {
      try {
        if (typeof DeviceOrientationEvent?.requestPermission === "function") {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener("deviceorientation", handleDeviceOrientation);
          } else {
            console.warn("Permission denied:", permission);
          }
        } else {
          window.addEventListener("deviceorientation", handleDeviceOrientation);
        }
      } catch (err) {
        console.error("DeviceOrientation setup error:", err);
      }
    };

    const setupOnFirstInteraction = () => {
      requestPermissionAndSetup();
    };

    window.addEventListener("touchstart", setupOnFirstInteraction, { once: true });
    window.addEventListener("click", setupOnFirstInteraction, { once: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", setupOnFirstInteraction);
      window.removeEventListener("click", setupOnFirstInteraction);
    };
  }, []);

  return (
    <Canvas className="absolute inset-0 z-0 pointer-events-none scale-110 md:scale-100 origin-center">
      <DualStarField theme={theme} gyroscopeShift={gyroscopeShift} isMobile={isMobile} />
      <CameraController mousePosition={mousePosition} targetRotation={targetRotation} />
    </Canvas>
  );
};

StarryBackground.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
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
