import React from 'react';
class NewClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: [] };
  }

  myChangeHandler = event => {
    this.setState({ ...this.state.username, username: event.target.value });
    // this.replaceState({ name: null });
  };

  onSaveHandler = e => {
    console.log('dataa=>', this.state.username);
    this.setState({ username: '' });
    // this.setState({ ...newname, {this.state.username });
  };

  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
        {header}
        <p>Enter your name:</p>
        {this.state.username}
        <input type="text" onChange={this.myChangeHandler} />
        <button type="submit" onClick={this.onSaveHandler}>
          save
        </button>
      </form>
    );
  }
}
export default NewClass;
