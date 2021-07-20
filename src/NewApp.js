import React, { useRef } from 'react';
import RFinput from './RFinput';

const NewApp = () => {
  const data = useRef();

  const call_this = () => {
    const dd = {
      name: data.current.value
    };
  };
  return (
    <>
      <RFinput ref={data} />
      &nbsp;
      <button onClick={call_this}>call this</button>
    </>
  );
};

export default NewApp;
