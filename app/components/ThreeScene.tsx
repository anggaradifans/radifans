'use client'

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    let frameId: number | null = null;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    renderer.setClearColor(0xf0f0f0); // Light gray background
    mountRef.current.appendChild(renderer.domElement);

    // Create a group to hold all objects
    const group = new THREE.Group();

    // Create the desk
    const deskGeometry = new THREE.BoxGeometry(2, 0.1, 1);
    const deskMaterial = new THREE.MeshPhongMaterial({ color: 0xD2B48C });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(0, -0.05, 0);
    group.add(desk);

    // Create the computer monitor
    const monitorGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.05);
    const monitorMaterial = new THREE.MeshPhongMaterial({ color: 0x4682B4 });
    const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
    monitor.position.set(0, 0.55, -0.4);
    group.add(monitor);

    // Create the screen
    const screenGeometry = new THREE.PlaneGeometry(0.75, 0.45);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.55, -0.37);
    group.add(screen);

    // Create the person
    const personGroup = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.4, 0.6, 0.2);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0.3, 0.3);
    personGroup.add(body);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFA07A });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 0.75, 0.3);
    personGroup.add(head);

    group.add(personGroup);

    // Create chair
    const chairSeatGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.4);
    const chairBackGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
    const chairMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const chairSeat = new THREE.Mesh(chairSeatGeometry, chairMaterial);
    const chairBack = new THREE.Mesh(chairBackGeometry, chairMaterial);
    chairSeat.position.set(0, -0.2, 0.5);
    chairBack.position.set(0, 0, 0.7);
    group.add(chairSeat);
    group.add(chairBack);

    scene.add(group);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Position the camera
    camera.position.set(3, 3, 3);
    camera.lookAt(0, 0, 0);

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate the entire scene
      group.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    start();

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.remove(group);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeScene;