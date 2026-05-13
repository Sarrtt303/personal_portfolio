// components/RotatingMoon.jsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeContext"; // adjust path

const RotatingMoon = ({
    size = 320,
    rotationSpeed = 0.0018,
    className = "",
}) => {
    const mountRef = useRef(null);

    const { theme } = useTheme();

    const darkMode = theme === "dark";

    useEffect(() => {
        if (!mountRef.current) return;

        // ========================================
        // Scene
        // ========================================
        const scene = new THREE.Scene();

        // ========================================
        // Camera
        // ========================================
        const camera = new THREE.PerspectiveCamera(
            45,
            1,
            0.1,
            1000
        );

        camera.position.z = 4.5;

        // ========================================
        // Renderer
        // ========================================
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(size, size);

        // IMPORTANT
        // Transparent background
        renderer.setClearColor(0x000000, 0);

        mountRef.current.appendChild(renderer.domElement);

        // ========================================
        // Mobile Optimization
        // ========================================
        const isMobile = window.innerWidth < 768;

        const sphereDetail = isMobile ? 42 : 72;

        // ========================================
        // Textures
        // ========================================
        const loader = new THREE.TextureLoader();

        const moonTexture = loader.load(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"
        );

        const displacementTexture = loader.load(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"
        );

        // ========================================
        // Geometry
        // ========================================
        const geometry = new THREE.SphereGeometry(
            2,
            sphereDetail,
            sphereDetail
        );

        // ========================================
        // Material
        // ========================================
        const material =
            new THREE.MeshPhongMaterial({
                map: moonTexture,

                displacementMap:
                    displacementTexture,

                displacementScale: darkMode
                    ? 0.06
                    : 0.025,

                bumpMap: displacementTexture,

                bumpScale: darkMode
                    ? 0.04
                    : 0.015,

                shininess: darkMode ? 0 : 8,

                color: darkMode
                    ? 0xffffff
                    : 0xfff4d6,
            });

        // ========================================
        // Moon Mesh
        // ========================================
        const moon = new THREE.Mesh(
            geometry,
            material
        );

        moon.rotation.x = 0.08;
        moon.rotation.y = Math.PI * 1.54;

        scene.add(moon);

        // ========================================
        // Lighting
        // ========================================

        // Main Light
        const directionalLight =
            new THREE.DirectionalLight(
                darkMode ? 0xffffff : 0xfff1b8,
                darkMode ? 1.2 : 2
            );

        directionalLight.position.set(
            -5,
            2,
            5
        );

        scene.add(directionalLight);

        // Ambient Light
        const ambientLight =
            new THREE.AmbientLight(
                darkMode ? 0x6b7280 : 0xffffff,
                darkMode ? 0.25 : 1.1
            );

        scene.add(ambientLight);

        // Hemisphere Light
        const hemiLight =
            new THREE.HemisphereLight(
                darkMode ? 0x8ea8ff : 0xfff4c2,
                darkMode ? 0x111827 : 0xffffff,
                darkMode ? 0.35 : 0.9
            );

        scene.add(hemiLight);

        // ========================================
        // Animation
        // ========================================
        let frameId;

        const animate = () => {
            frameId =
                requestAnimationFrame(animate);

            moon.rotation.y += rotationSpeed;

            renderer.render(scene, camera);
        };

        animate();

        // ========================================
        // Resize
        // ========================================
        const handleResize = () => {
            const updatedSize =
                window.innerWidth < 768
                    ? Math.min(220, size)
                    : size;

            renderer.setSize(
                updatedSize,
                updatedSize
            );
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        // ========================================
        // Cleanup
        // ========================================
        return () => {
            cancelAnimationFrame(frameId);

            window.removeEventListener(
                "resize",
                handleResize
            );

            geometry.dispose();
            material.dispose();

            renderer.dispose();

            if (
                mountRef.current &&
                renderer.domElement
            ) {
                mountRef.current.removeChild(
                    renderer.domElement
                );
            }
        };
    }, [theme, rotationSpeed, size, darkMode]);

    return (
        <div
            ref={mountRef}
            className={className}
            style={{
                width:
                    window.innerWidth < 768
                        ? Math.min(220, size)
                        : size,

                height:
                    window.innerWidth < 768
                        ? Math.min(220, size)
                        : size,

                borderRadius: "9999px",

                overflow: "hidden",

                // Makes it feel softer in UI
                filter: darkMode
                    ? "drop-shadow(0 0 40px rgba(120,140,255,0.18))"
                    : "drop-shadow(0 0 50px rgba(255,210,120,0.28))",
            }}
        />
    );
};

export default RotatingMoon;