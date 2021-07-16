import React from 'react';
class New_getDerivedStateFromProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' });
  };
  render() {
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
