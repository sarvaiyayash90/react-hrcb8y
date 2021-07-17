import React, { useState, Fragment } from 'react';
import './style.css';
import NewApp from './NewApp';
import Cheak from './Cheak.js';

import Demo from './Demo.js';
import Didupdate from './Didupdate.js';
import New_shouldComponentUpdate from './New_shouldComponentUpdate.js';
import New_getSnapshotBeforeUpdate from './New_getSnapshotBeforeUpdate.js';
import New_getDerivedStateFromProps from './New_getDerivedStateFromProps';
import NewClass from './NewClass';
import New_PropTypes from './New_PropTypes';

import New_WindowDimensions from './New_WindowDimensions';

export default function App() {
  return (
    <>
      <React.Fragment>
        {/* <h1>hello</h1> */}
        {/* <NewApp />
        <Cheak /> */}
        {/* <Demo /> */}
        {/* <Didupdate /> */}
        {/* <New_shouldComponentUpdate /> */}
        {/* <New_getSnapshotBeforeUpdate /> */}
        {/* <NewClass />
        <New_PropTypes name="yash" age={25} /> */}
        <New_WindowDimensions />
        <New_getDerivedStateFromProps favcol="yellow" />
      </React.Fragment>
    </>
  );
  // const [name, setname] = useState();
  // const onchangeHandler = e => {
  //   setname(e.target.value);
  // };
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('name is ' + name);
  //   console.log('You clicked submit.');
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input
  //       type="text"
  //       aria-label="name"
  //       aria-required="true"
  //       onChange={e => {
  //         onchangeHandler(e);
  //       }}
  //       value={name}
  //       name="name"
  //     />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  // const numbers = [1, 2, 3, 4, 5];
  // const listItems = numbers.map(number => (
  //   <li key={number.toString()}> {number}</li>
  // ));
  // return <ul>{listItems}</ul>;
}
