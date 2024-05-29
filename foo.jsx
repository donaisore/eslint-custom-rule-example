import React, { useState } from 'react';

export const Foo = () => {
  const [count, setCount] = useState(0);
  const hoge = 'a';

  return (
    <>
    {count}
    <button onClick={() => setCount(prev => prev + 1)}>click!!</button>
    </>
  )
}
