import React, { useState, useCallback, useRef } from 'react';
// import RFinput from './RFinput';
import debounce from 'lodash.debounce';

const NewApp = () => {
  const [name, setdata] = useState('');
  const [dbdata, setdbdata] = useState('');

  const data_store = useRef(debounce(dd => setdbdata(dd), 1000)).current; // throttle

  // const data_store = debounce(dd => setdbdata(dd), 1000); // debounce
  // const data_store = useCallback(debounce(data => setdbdata(data), 1000), []);

  const onInputChange = e => {
    setdata(e.target.value);
    data_store(e.target.value);
  };

  return (
    <>
      <h6>old=</h6>
      {name}
      <h6>new=</h6>
      {dbdata}
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => onInputChange(e)}
      />
    </>
  );
};

export default NewApp;
