import React from 'react';

export default class New_shouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  shouldComponentUpdate() {
    console.log('data new update new before');
    // setTimeout(() => {
    if (this.state.favoritecolor === 'red') {
      console.log('data check true');
      return true;
    } else {
      console.log('data check false');
      return false;
    }
    // return false; /* ama new update nahi karva de*/
    // return true; /* ama new value update karva dese*/
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
