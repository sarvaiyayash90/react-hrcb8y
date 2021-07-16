import React from 'react';

export default class New_getSnapshotBeforeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML =
      'Before the update, the favorite was ' + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
      'The updated favorite is getSnapshotBeforeUpdate ' +
      this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1" />
        <div id="div2" />
      </div>
    );
  }
}
