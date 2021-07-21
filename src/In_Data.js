import React, { useState } from 'react';

const In_Data = () => {
  const [username, setusername] = useState('');
  const [data, setdata] = useState([]);

  const oninputChange = e => {
    console.log('data', e.target.value);
    setusername(e.target.value);
  };

  const submitData = e => {
    e.preventDefault();
    const dd = {
      username: username
    };
    setdata([...data, dd]);
  };

  return (
    <>
      <input
        type="text"
        name="username"
        value={username}
        onBlur={e => oninputChange(e)}
      />
      <button type="submit" onClick={e => submitData(e)}>
        submit
      </button>
      <h3>
        All Data:-
        {data.map((item, index) => {
          return <p key={index}>{item.username}</p>;
        })}
      </h3>
    </>
  );
};

export default In_Data;
