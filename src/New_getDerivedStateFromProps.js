import React from 'react';
class New_getDerivedStateFromProps extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor call');
    this.state = { favoritecolor: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('static method call');
    return { favoritecolor: props.favcol };
  }

  // shouldComponentUpdate() {
  //   return true;
  // }

  changeColor = () => {
    console.log('call this button call event');
    this.setState({ favoritecolor: 'blue' });
  };

  render() {
    console.log('render call this part');
    return (
      <div>
        <h1>My Favorite Color getderived is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default New_getDerivedStateFromProps;
