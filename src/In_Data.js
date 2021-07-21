import React, { useState } from 'react';

const In_Data = () => {
  const [username, setusername] = useState('');
  const [data, setdata] = useState([]);

  const oninputChange = e => {
    setusername(e.target.value);
  };

  const submitData = e => {
    e.preventDefault();
    const dd = {
      username: username
    };
    setdata([...data, dd]);
  };

  const deleteData = data => {
    console.log('data', data);
  };

  return (
    <>
      <input
        type="text"
        name="username"
        value={username}
        onChange={e => oninputChange(e)}
      />
      <button type="submit" onClick={e => submitData(e)}>
        submit
      </button>
      <h3>
        All Data:-
        {data.map((item, index) => {
          return (
            <>
              <p key={index}>{item.username}</p>
              <button
                onClick={index => {
                  deleteData(index);
                }}
              >
                delete
              </button>
            </>
          );
        })}
      </h3>
    </>
  );
};

export default In_Data;
