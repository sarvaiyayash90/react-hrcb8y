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
      id: Math.floor(Math.random() * 1000000),
      username: username
    };
    setdata([...data, dd]);
  };

  const deleteData = id => {
    const delete_data = data.filter(val => {
      return val.id !== id;
    });
    setdata(delete_data);
  };

  const editData = id => {
    console.log('data', id);
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
        <br />
        <br />
        {data.map(item => {
          return (
            <>
              <span key={item.id}>
                {item.id} &nbsp;&nbsp;&nbsp;{item.username}
                &nbsp;&nbsp;&nbsp;
                <button
                  onClick={() => {
                    deleteData(item.id);
                  }}
                >
                  delete
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    editData(item.id);
                  }}
                >
                  Edit
                </button>
              </span>
              <br />
            </>
          );
        })}
      </h3>
    </>
  );
};

export default In_Data;
