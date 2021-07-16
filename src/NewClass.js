import React from 'react';
class NewClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { username: '' };
    this.username = React.createRef();
  }
  myChangeHandler = event => {
    // this.setState({ username: event.target.value });
    this.username.current.value;
  };
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
        {header}
        <p>Enter your name:</p>
        <input
          type="text"
          ref={this.username}
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}
export default NewClass;
