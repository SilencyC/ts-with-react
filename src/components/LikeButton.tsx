import React, { useState, useEffect } from 'react';
import useURLLoader from '../hooks/useURLLoader';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const [
    data,
    loading,
  ] = useURLLoader('http://rap2.taobao.org:38080/app/mock/246808/news/view', [
    on,
  ]);
  useEffect(() => {
    document.title = `点击了${like}次！`;
    console.log();
  }, [like]);
  return (
    <div>
      <button onClick={() => (on ? setLike(like + 1) : '')}>
        <span>{like}</span>
        👍
      </button>
      <br />
      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button><br/>
      {/* {data ? data.image : ''} */}
      {!loading && data ? <img src={data.image} alt="" /> : 'loaging...'}
    </div>
  );
};

export default LikeButton;
