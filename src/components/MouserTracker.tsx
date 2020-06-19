import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const MouserTracker: React.FC = () => {
  const positions = useMousePosition();
  console.log('before render', positions.x);
  return (
    <h2>
      X: {positions.x}, Y: {positions.y}
    </h2>
  );
};

export default MouserTracker;
