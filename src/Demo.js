import React from 'react';

export default class Demo extends React.Component {
  constructor(props) {
    console.log('constructor part');
    super(props);
    this.state = {
      name: '',
      newname: '',
      show: true
    };
  }

  componentDidMount() {
    console.log('data update new componentDidMount before');
    setTimeout(() => {
      this.setState({ name: 'ReactJs' });
      console.log('data update new componentDidMount after');
    }, 1000);;
  }

  componentDidUpdate(prveprops, prvestate, ss) {
    console.log('data____prvestate', prvestate);
    console.log('data update new componentDidUpdate parents part before');
    // console.log('new', prveprops);
    // console.log('new', ss);
    if (prvestate.name === '') {
      this.setState({ name: 'infilon' });
      console.warn('match');
    } else {
      console.warn('not match');
    }
    // console.log('data update new componentDidUpdate before');
    // if (ps !== pp) {
    //   this.setState({ name: 'infilon' });
    //   console.log('data update new componentDidUpdate after');
    // }
    // console.log('data update new componentDidUpdate before');
    // setTimeout(() => {
    //   this.onChangeHandler();
    //   console.log('data update new componentDidUpdate after');
    // }, 2000);
    // this.onChangeHandler();
  }

  onChangeHandler_false = () => {
    this.setState({ show: false });
  };

  onChangeHandler = () => {
    this.state.newname = this.state.name;
    this.state.newname === 'yash'
      ? this.setState({ name: 'Jay' })
      : this.setState({ name: 'yash' });
  };

  render() {
    console.log('call this render part parent part');
    return (
      <>
        {this.state.show ? (
          <>
            <h1>My name is {this.state.name}</h1>
            <Demo2 data={this.state.name} />
          </>
        ) : null}
        <button type="button" onClick={this.onChangeHandler}>
          Change name
        </button>
        &nbsp;&nbsp;
        <button type="button" onClick={this.onChangeHandler_false}>
          Delete
        </button>
      </>
    );
  }
}

class Demo2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prveprops, prvestate, ss) {
    //console.log('data', prvestate);
    console.log('data update new componentDidUpdate child part');
    console.log('new________', prveprops, this.props.data);
  }

  componentWillUnmount() {
    console.log('data will be deleted');
    // console.log('data update new componentWillUnmount before');
    // setTimeout(() => {
    //   this.onChangeHandler_false();
    //   console.log('data update new componentWillUnmount after');
    // }, 4000);
  }

  render() {
    console.log('call this render part child part');
    return (
      <>
        <h4>My child name is {this.props.data}</h4>
      </>
    );
  }
}
