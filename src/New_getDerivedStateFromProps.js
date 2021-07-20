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

  // changeColor = () => {
  //   console.log('call this button call event');
  //   this.setState({ favoritecolor: 'blue' });
  // };

  // shouldComponentUpdate() {
  //   console.log('favoritecolor', this.state.favoritecolor);
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate this part', this.state.favoritecolor);
  // }

  // changeColor = () => {
  //   console.log('call this button call event');
  //   // this.setState({ favoritecolor: 'blue' });
  //   // this.newcolor = this.this.favoritecolor;
  //   this.state.favoritecolor === 'red'
  //     ? this.setState({ favoritecolor: 'blue' })
  //     : this.setState({ favoritecolor: 'red' });
  // };

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
