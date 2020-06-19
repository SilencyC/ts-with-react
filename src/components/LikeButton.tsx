import React, { useState, useEffect } from 'react';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  useEffect(() => {
    document.title = `点击了${like}次！`;
  }, [like]);
  return (
    <div>
      <button onClick={() => (on ? setLike(like + 1) : '')}>
        <span>{like}</span>
        👍
      </button>
      <br />
      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default LikeButton;
