import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('effect', positions.x);
    const getMouse = (e: MouseEvent) => {
      console.log('inner');
      setPositions({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener('click', getMouse);
    return () => {
      console.log('remove event', positions.x);
      document.removeEventListener('click', getMouse);
    };
  }, []);
  return positions;
};

export default useMousePosition;
