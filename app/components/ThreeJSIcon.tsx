'use client'

import React from 'react';

const CSS3DIcon: React.FC = () => {
  return (
    <div className="icon-3d-container">
      <div className="icon-3d">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <style jsx>{`
        .icon-3d-container {
          perspective: 1000px;
          width: 100px;
          height: 100px;
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 20;
        }
        .icon-3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 5s infinite linear;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(65, 105, 225, 0.5);
          border: 2px solid #4169e1;
        }
        .front  { transform: rotateY(0deg) translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }
        @keyframes rotate {
          from { transform: rotateX(0) rotateY(0); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CSS3DIcon;