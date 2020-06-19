import React from 'react';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouserTracker from './components/MouserTracker';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const positions = useMousePosition();
  return (
    <div className="App">
      <Hello message="Hellw World" />
      <LikeButton />
      <MouserTracker />
      <p>
        X: {positions.x}, Y: {positions.y}
      </p>
    </div>
  );
}

export default App;
